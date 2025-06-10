# HostelMate - College Roommate Matching App (Frontend)

A roommate-matching platform tailored for college hostel students, focusing on the frontend implementation. The app is structured like a dating app but designed to match students of the same gender and college based on shared hobbies.

## Features

- **Landing Page**: Introduction to the app with sign up and login options
- **Authentication**: User registration and login (UI only)
- **Profile Setup**: Upload profile photo, add bio, select hobbies
- **Matchmaking**: View top 5 matches based on compatibility
- **Browse Profiles**: Swipe through potential roommates
- **Requests System**: Send, receive, and manage roommate requests
- **Real-time Chat**: Chat with matched roommates
- **Theme Toggle**: Switch between 32+ themes

## Tech Stack

- Next.js 14+ (App Router)
- Tailwind CSS
- DaisyUI for component styling
- Framer Motion for animations

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app`: Pages using the Next.js App Router
- `/components`: Reusable UI components
- `/public`: Static assets

## Note

This is a frontend-only implementation. In a real-world scenario, this would be connected to a backend service that handles:

- User authentication & session management
- Database operations (MongoDB)
- Real-time chat (WebSockets)
- Profile matching logic
- File uploads (Cloudinary)
