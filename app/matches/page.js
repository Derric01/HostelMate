'use client';

import { useState, useEffect } from 'react';
import MatchCard from '@/components/MatchCard';

export default function Matches() {
  const [topMatches, setTopMatches] = useState([]);
  const [otherMatches, setOtherMatches] = useState([]);
  
  useEffect(() => {
    // Simulate fetching data
    // In a real app, this would be an API call
    
    // Top 5 matches
    const mockTopMatches = [
      {
        id: 1,
        name: "Sarah Johnson",
        college: "Stanford University",
        matchPercentage: 95,
        hobbies: ["Reading", "Hiking", "Photography"],
        image: "/avatar.jpg"
      },
      {
        id: 2,
        name: "Michael Brown",
        college: "Stanford University",
        matchPercentage: 85,
        hobbies: ["Gaming", "Coding", "Movies"],
        image: "/avatar.jpg"
      },
      {
        id: 3,
        name: "Emily Davis",
        college: "Stanford University",
        matchPercentage: 80,
        hobbies: ["Music", "Travel", "Cooking"],
        image: "/avatar.jpg"
      },
      {
        id: 4,
        name: "James Wilson",
        college: "Stanford University",
        matchPercentage: 75,
        hobbies: ["Sports", "Movies", "Gaming"],
        image: "/avatar.jpg"
      },
      {
        id: 5,
        name: "Olivia Martinez",
        college: "Stanford University",
        matchPercentage: 70,
        hobbies: ["Dancing", "Cooking", "Languages"],
        image: "/avatar.jpg"
      }
    ];
    
    // Other matches
    const mockOtherMatches = [
      {
        id: 6,
        name: "Sophia Taylor",
        college: "Stanford University",
        matchPercentage: 65,
        hobbies: ["Yoga", "Reading", "Hiking"],
        image: "/avatar.jpg"
      },
      {
        id: 7,
        name: "Daniel Anderson",
        college: "Stanford University",
        matchPercentage: 60,
        hobbies: ["Photography", "Travel", "Languages"],
        image: "/avatar.jpg"
      },
      {
        id: 8,
        name: "Ava Thomas",
        college: "Stanford University",
        matchPercentage: 55,
        hobbies: ["Music", "Dancing", "Movies"],
        image: "/avatar.jpg"
      }
    ];
    
    setTopMatches(mockTopMatches);
    setOtherMatches(mockOtherMatches);
  }, []);
  return (
    <div className="py-4 sm:py-6 lg:py-8 container mx-auto px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Your Top Matches</h1>
      
      {/* Top 5 matches */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
          <span className="text-primary mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </span>
          Most Compatible
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {topMatches.map(match => (
            <MatchCard key={match.id} user={match} />
          ))}
        </div>
      </div>
      
      {/* Other potential matches */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
          <span className="text-secondary mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </span>
          More Potential Matches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {otherMatches.map(match => (
            <MatchCard key={match.id} user={match} />
          ))}
        </div>
      </div>
    </div>
  );
}
