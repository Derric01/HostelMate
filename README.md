# HostelMate - College Roommate Matching Platform

A comprehensive roommate-matching platform for college hostel students, designed to help students find compatible roommates based on shared hobbies and interests.

## Project Structure

This project is organized into two main parts:

### Frontend

The frontend is a Next.js application with the following features:
- Landing page with introduction to the platform
- User authentication (UI only)
- Profile setup with hobby selection
- Matchmaking based on compatibility
- Browse profiles with swipe functionality
- Request system for connecting with potential roommates
- Real-time chat interface
- Theme toggling with 32+ options from DaisyUI

### Backend (Future Development)

The backend will be implemented in a future phase and will include:
- User authentication and session management
- MongoDB database for storing user profiles
- WebSocket integration for real-time chat
- Profile matching algorithm
- File upload service integration

## Getting Started

### Running the Frontend

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Tech Stack

- **Frontend**:
  - Next.js 14+ (App Router)
  - Tailwind CSS
  - DaisyUI
  - Framer Motion

- **Backend** (Future Implementation):
  - FastAPI/Django
  - MongoDB
  - WebSockets
  - Cloudinary for uploads

## Notes

This project currently focuses on the frontend implementation only. The UI is designed to be easily integrated with backend services in the future.


backend guide


1. Database Schema Design
   - User profiles
   - Matching system
   - Chat functionality
   - Conversations management

2. API Endpoints
   - Authentication flows
   - Profile management
   - Matching system
   - Real-time chat

3. WebSocket Implementation
   - Connection handling
   - Message events
   - Match events
   - Security considerations

4. Matching Algorithm
   - Compatibility calculation
   - Weighting factors
   - Performance optimization

5. File Upload Service
   - Cloudinary integration
   - Security measures
   - Image optimization

6. Security Considerations
   - JWT implementation
   - Input validation
   - WebSocket security
   - File upload security

7. Development Setup
   - MongoDB configuration
   - Environment setup
   - Required variables

8. Testing, Deployment, and Monitoring
   - Test coverage requirements
   - Deployment architecture
   - Performance monitoring

