'use client';

import { useState } from 'react';

export default function ImageUploader({ initialImage = null }) {
  const [previewUrl, setPreviewUrl] = useState(initialImage);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setIsUploading(true);
    
    // Create a preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
    
    // In a real app, you'd upload to Cloudinary or similar here
    console.log("Image selected:", file.name);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-md">
          {previewUrl ? (
            <img src={previewUrl} alt="Profile preview" />
          ) : (
            <div className="bg-base-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-base-content opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
        </div>
      </div>
      
      <label className="btn btn-sm btn-outline shadow-sm hover:shadow-md transition-all duration-300">
        {isUploading ? (
          <>
            <span className="loading loading-spinner loading-xs mr-1"></span>
            Uploading...
          </>
        ) : (
          <>
            {previewUrl ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Change Photo
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Upload Photo
              </>
            )}
          </>
        )}
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={handleImageChange}
          disabled={isUploading}
        />
      </label>
      
      <p className="text-xs text-base-content/60 text-center mt-1">
        Recommended: Square image, max 5MB
      </p>
    </div>
  );
}
