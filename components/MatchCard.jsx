'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MatchCard({ user, showRequest = true }) {
  const [requestSent, setRequestSent] = useState(false);
  
  // Dummy data properties
  const {
    id = 1,
    name = "Sarah Johnson",
    college = "Stanford University",
    matchPercentage = 85,
    hobbies = ["Reading", "Hiking", "Photography"],
    image = "/avatar.jpg"
  } = user || {};

  const handleRequest = () => {
    // This would be a real API call in a production app
    console.log(`Request sent to user ${id}`);
    setRequestSent(true);
  };
  return (
    <div className="card card-compact bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 h-full border border-base-200">      <figure className="h-40 sm:h-48 relative overflow-hidden">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute top-2 right-2 badge badge-primary text-xs sm:text-sm font-medium shadow-sm">{matchPercentage}% Match</div>
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-base sm:text-lg">{name}</h2>
        <p className="text-xs sm:text-sm text-base-content/70">{college}</p>
        
        <div className="flex flex-wrap gap-1 my-1 sm:my-2">
          {hobbies.map((hobby, index) => (
            <span key={index} className="badge badge-outline badge-xs sm:badge-sm hover:bg-base-200 transition-colors duration-200">{hobby}</span>
          ))}
        </div>
        <div className="card-actions justify-end mt-2 gap-2">
          <Link 
            href={`/profile/${id}`} 
            className="btn btn-outline btn-xs sm:btn-sm hover:shadow-sm transition-all duration-300"
          >
            View Profile
          </Link>
          {showRequest && (
            requestSent ? 
              <button className="btn btn-disabled btn-xs sm:btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Sent
              </button> :
              <button 
                className="btn btn-primary btn-xs sm:btn-sm shadow-sm hover:shadow-md transition-all duration-300" 
                onClick={handleRequest}
              >
                Send Request
              </button>
          )}
        </div>
      </div>
    </div>
  );
}
