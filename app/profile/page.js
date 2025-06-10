'use client';

import { useState, useEffect } from 'react';
import ImageUploader from '@/components/ImageUploader';

export default function Profile() {
  const [formData, setFormData] = useState({
    bio: '',
    hobbies: [],
  });

  const [isSaved, setIsSaved] = useState(false);
  
  // List of potential hobbies
  const hobbyOptions = [
    'Reading', 'Writing', 'Hiking', 'Camping', 'Photography', 
    'Cooking', 'Baking', 'Gaming', 'Music', 'Sports', 
    'Drawing', 'Painting', 'Knitting', 'Gardening', 'Dancing',
    'Cycling', 'Running', 'Swimming', 'Yoga', 'Meditation',
    'Movies', 'TV Shows', 'Traveling', 'Languages', 'Coding'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleHobbyToggle = (hobby) => {
    setFormData(prev => {
      // If hobby is already selected, remove it
      if (prev.hobbies.includes(hobby)) {
        return {
          ...prev,
          hobbies: prev.hobbies.filter(h => h !== hobby)
        };
      } 
      // Otherwise add it
      else {
        return {
          ...prev,
          hobbies: [...prev.hobbies, hobby]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate saving (no real backend)
    console.log('Saving profile:', formData);
    
    // Show success message
    setIsSaved(true);
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };
  return (
    <div className="py-4 sm:py-6 lg:py-8 container mx-auto px-4 max-w-4xl">
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body p-4 sm:p-6 md:p-8">
          <h2 className="card-title text-xl sm:text-2xl font-bold text-center mb-6">Complete Your Profile</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="flex flex-col items-center">
                <ImageUploader />
              </div>
              
              <div className="flex-1">
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text font-medium">Bio</span>
                  </label>
                  <textarea
                    name="bio"
                    placeholder="Tell potential roommates about yourself..."
                    className="textarea textarea-bordered h-32 focus:textarea-primary transition-colors duration-200"
                    value={formData.bio}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-medium">Hobbies & Interests</span>
                <span className="label-text-alt">(Select all that apply)</span>
              </label>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {hobbyOptions.map((hobby) => (
                  <button
                    key={hobby}
                    type="button"
                    className={`badge badge-lg ${
                      formData.hobbies.includes(hobby) 
                        ? 'badge-primary shadow-sm' 
                        : 'badge-outline hover:bg-base-200'
                    } cursor-pointer p-4 transition-all duration-200`}
                    onClick={() => handleHobbyToggle(hobby)}
                  >
                    {hobby}
                  </button>
                ))}
              </div>
            </div>
            
            {isSaved && (
              <div className="alert alert-success mb-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Profile saved successfully!</span>
              </div>
            )}
            
            <div className="form-control mt-6 flex flex-row gap-4 justify-end">
              <button type="submit" className="btn btn-primary shadow-md hover:shadow-lg transition-all duration-300">
                Save Profile
              </button>
              <button 
                type="button" 
                className="btn btn-outline hover:shadow-md transition-all duration-300"
                onClick={() => window.location.href = '/matches'}
              >
                Go to Matches
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
