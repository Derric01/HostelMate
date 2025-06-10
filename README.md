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
