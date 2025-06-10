'use client';

import { useState, useEffect } from 'react';
import ProfileCard from '@/components/ProfileCard';
import { motion } from 'framer-motion';

export default function Browse() {
  const [profiles, setProfiles] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    // In a real app, this would be an API call
    const mockProfiles = [
      {
        id: 1,
        name: "Sarah Johnson",
        college: "Stanford University",
        gender: "Female",
        bio: "Computer Science student who loves hiking and photography on weekends. Looking for a quiet and organized roommate.",
        hobbies: ["Reading", "Hiking", "Photography", "Coding", "Travel"],
        image: "/avatar.jpg"
      },
      {
        id: 2,
        name: "Michael Brown",
        college: "Stanford University",
        gender: "Male",
        bio: "Business major who enjoys playing basketball and video games. I'm clean, sociable, and respect personal space.",
        hobbies: ["Basketball", "Gaming", "Movies", "Gym", "Cooking"],
        image: "/avatar.jpg"
      },
      {
        id: 3,
        name: "Emily Davis",
        college: "Stanford University",
        gender: "Female",
        bio: "Psychology student and music enthusiast. I play the piano and enjoy quiet evenings reading or watching documentaries.",
        hobbies: ["Music", "Reading", "Piano", "Psychology", "Documentaries"],
        image: "/avatar.jpg"
      },
      {
        id: 4,
        name: "James Wilson",
        college: "Stanford University",
        gender: "Male",
        bio: "Engineering student who loves outdoor activities. I'm an early riser and keep my space tidy and organized.",
        hobbies: ["Hiking", "Cycling", "Engineering", "Coffee", "Early Riser"],
        image: "/avatar.jpg"
      },
      {
        id: 5,
        name: "Olivia Martinez",
        college: "Stanford University",
        gender: "Female",
        bio: "Art major who loves to cook and dance. Looking for a roommate who appreciates creativity and doesn't mind occasional paint smells.",
        hobbies: ["Art", "Cooking", "Dancing", "Photography", "Museums"],
        image: "/avatar.jpg"
      }
    ];
    
    setProfiles(mockProfiles);
  }, []);

  const handleSwipe = (newDirection) => {
    if (profiles.length === 0) return;
    
    setDirection(newDirection);
    
    // Simulate moving to next profile after a short delay
    setTimeout(() => {
      setCurrentProfileIndex((prevIndex) => 
        prevIndex < profiles.length - 1 ? prevIndex + 1 : 0
      );
      setDirection(null);
    }, 300);
  };

  // Variants for the animation
  const variants = {
    center: { x: 0, scale: 1, opacity: 1 },
    left: { x: -300, scale: 0.8, opacity: 0 },
    right: { x: 300, scale: 0.8, opacity: 0 }
  };
  return (
    <div className="py-4 sm:py-6 lg:py-8 container mx-auto px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Browse Profiles</h1>

      <div className="flex flex-col items-center">
        {profiles.length > 0 ? (
          <>
            <div className="w-full max-w-md relative">
              <motion.div
                key={currentProfileIndex}
                initial={direction === 'left' ? 'right' : direction === 'right' ? 'left' : 'center'}
                animate="center"
                exit={direction === 'left' ? 'left' : 'right'}
                variants={variants}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <ProfileCard user={profiles[currentProfileIndex]} />
              </motion.div>
            </div>
            
            <div className="flex gap-8 mt-8">              <button 
                className="btn btn-circle btn-outline text-error hover:bg-error hover:text-white hover:border-error shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => handleSwipe('left')}
                aria-label="Pass"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </button>
              
              <button 
                className="btn btn-circle btn-outline text-success hover:bg-success hover:text-white hover:border-success shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => handleSwipe('right')}
                aria-label="Like"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </button>
            </div>
            
            <div className="mt-4 text-sm text-base-content/60 bg-base-200 px-3 py-1 rounded-full">
              Profile {currentProfileIndex + 1} of {profiles.length}
            </div>
          </>
        ) : (
          <div className="card bg-base-100 shadow-xl p-8 border border-base-200">
            <div className="flex flex-col items-center">
              <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
              <p className="text-center">Loading profiles...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
