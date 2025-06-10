# HostelMate Backend Implementation Guide

This document provides comprehensive specifications for implementing the HostelMate backend services to support the existing Next.js frontend.

## Architecture Overview

The backend will be implemented using:
- FastAPI/Django for REST API endpoints
- MongoDB for data storage
- WebSocket server for real-time chat
- Cloudinary for file uploads
- JWT for authentication

## Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  email: String,
  passwordHash: String,
  name: String,
  college: String,
  gender: String,
  bio: String,
  hobbies: [String],
  image: String, // Cloudinary URL
  createdAt: Date,
  updatedAt: Date
}
```

### Match Collection
```javascript
{
  _id: ObjectId,
  user1Id: ObjectId,
  user2Id: ObjectId,
  matchPercentage: Number,
  status: String, // 'pending', 'accepted', 'rejected'
  requestedBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

### Message Collection
```javascript
{
  _id: ObjectId,
  conversationId: ObjectId,
  senderId: ObjectId,
  text: String,
  timestamp: Date,
  read: Boolean
}
```

### Conversation Collection
```javascript
{
  _id: ObjectId,
  participants: [ObjectId],
  lastMessage: {
    text: String,
    timestamp: Date,
    senderId: ObjectId
  },
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- POST `/api/auth/refresh` - Refresh JWT token
- POST `/api/auth/logout` - User logout

### Profile
- GET `/api/profile` - Get current user profile
- PUT `/api/profile` - Update user profile
- POST `/api/profile/image` - Upload profile image
- GET `/api/profile/{userId}` - Get specific user profile

### Matching
- GET `/api/matches` - Get all matches (filtered by status)
- GET `/api/matches/top` - Get top 5 matches
- POST `/api/matches/request/{userId}` - Send match request
- PUT `/api/matches/{matchId}/accept` - Accept match request
- PUT `/api/matches/{matchId}/reject` - Reject match request

### Chat
- GET `/api/conversations` - List all conversations
- GET `/api/conversations/{conversationId}` - Get conversation details
- GET `/api/conversations/{conversationId}/messages` - Get conversation messages
- POST `/api/conversations/{conversationId}/messages` - Send new message
- PUT `/api/conversations/{conversationId}/read` - Mark conversation as read

## WebSocket Events

### Connection
```javascript
// Connect with JWT token
ws://api/chat?token=${jwt_token}
```

### Message Events
```javascript
// New message
{
  type: 'message',
  data: {
    conversationId: string,
    senderId: string,
    text: string,
    timestamp: string
  }
}

// Message read receipt
{
  type: 'read_receipt',
  data: {
    conversationId: string,
    userId: string,
    timestamp: string
  }
}
```

### Match Events
```javascript
// New match request
{
  type: 'match_request',
  data: {
    matchId: string,
    userId: string,
    name: string,
    image: string
  }
}

// Match status update
{
  type: 'match_update',
  data: {
    matchId: string,
    status: string,
    userId: string
  }
}
```

## Matching Algorithm

The matching algorithm should:

1. Consider only users from the same college and gender
2. Calculate match percentage based on:
   - Common hobbies (60% weight)
   - Bio keyword similarity (20% weight)
   - Activity patterns (20% weight)

```python
def calculate_match_percentage(user1, user2):
    if user1.college != user2.college or user1.gender != user2.gender:
        return 0
    
    # Calculate hobby similarity
    common_hobbies = set(user1.hobbies) & set(user2.hobbies)
    total_hobbies = set(user1.hobbies) | set(user2.hobbies)
    hobby_score = len(common_hobbies) / len(total_hobbies) if total_hobbies else 0
    
    # Calculate bio similarity using NLP
    bio_score = calculate_bio_similarity(user1.bio, user2.bio)
    
    # Calculate activity pattern similarity
    activity_score = calculate_activity_similarity(user1, user2)
    
    # Weighted average
    return (
        hobby_score * 0.6 +
        bio_score * 0.2 +
        activity_score * 0.2
    ) * 100
```

## File Upload Service

Implement Cloudinary integration for profile image uploads:

1. Generate upload signature on backend
2. Allow direct upload to Cloudinary from frontend
3. Store Cloudinary URL in user profile
4. Use image transformations for different sizes

## Security Considerations

1. JWT Authentication
   - Short-lived access tokens (15 minutes)
   - Longer-lived refresh tokens (7 days)
   - Secure HTTP-only cookies

2. Input Validation
   - Validate all API inputs
   - Sanitize user content
   - Rate limiting on APIs

3. WebSocket Security
   - Authenticate connections with JWT
   - Validate message formats
   - Implement connection pooling

4. File Upload Security
   - Validate file types
   - Limit file sizes
   - Scan for malware

## Development Setup

1. Set up MongoDB:
```bash
docker run -d -p 27017:27017 --name hostelmate-mongo mongo:latest
```

2. Set up development environment:
```bash
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows
pip install -r requirements.txt
```

3. Required environment variables:
```bash
MONGODB_URI=mongodb://localhost:27017/hostelmate
JWT_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

## Testing

Implement comprehensive tests:
- Unit tests for services
- Integration tests for API endpoints
- WebSocket connection tests
- Load tests for chat system

## Deployment

Recommended deployment stack:
- AWS ECS for API containers
- MongoDB Atlas for database
- Redis for caching and WebSocket scaling
- CloudFront for static assets
- AWS Application Load Balancer for WebSocket connections

## Performance Considerations

1. Database
   - Index frequently queried fields
   - Implement caching for match results
   - Use aggregation pipeline for match calculations

2. WebSocket
   - Implement connection pooling
   - Handle reconnection gracefully
   - Scale horizontally using Redis pub/sub

3. API
   - Cache heavy computations
   - Implement pagination
   - Use compression for responses

## Monitoring

Implement monitoring for:
- API response times
- WebSocket connections
- Database performance
- Error rates
- Match algorithm performance

Use services like:
- AWS CloudWatch
- Sentry for error tracking
- Prometheus + Grafana for metrics
