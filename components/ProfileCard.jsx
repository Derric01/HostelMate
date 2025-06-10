'use client';

import { useState } from 'react';

export default function ProfileCard({ user }) {
  // Default values in case user data is incomplete
  const {
    id = 1,
    name = "Sarah Johnson",
    college = "Stanford University",
    gender = "Female",
    bio = "Computer Science student who loves hiking and photography on weekends. Looking for a quiet and organized roommate.",
    hobbies = ["Reading", "Hiking", "Photography", "Coding", "Travel"],
    image = "/avatar.jpg"
  } = user || {};
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 h-full">
      <figure className="px-6 sm:px-10 pt-6 sm:pt-10 flex justify-center">
        <div className="avatar">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-md">
            <img src={image} alt={name} className="object-cover" />
          </div>
        </div>
      </figure>
      <div className="card-body px-4 sm:px-6 pt-4 pb-6">
        <h2 className="card-title text-xl sm:text-2xl justify-center">{name}</h2>
        <div className="flex flex-row items-center justify-center gap-2 mb-1">
          <div className="badge badge-neutral">{gender}</div>
          <p className="text-sm text-base-content/70">{college}</p>
        </div>
        
        <div className="divider my-2 before:bg-base-300 after:bg-base-300">Bio</div>
        <p className="text-sm sm:text-base text-base-content/80">{bio}</p>
        
        <div className="divider my-2 before:bg-base-300 after:bg-base-300">Hobbies</div>
        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
          {hobbies.map((hobby, index) => (
            <span key={index} className="badge badge-primary badge-sm sm:badge-md shadow-sm">{hobby}</span>
          ))}
        </div>
        
        <div className="card-actions justify-center mt-6">
          <button className="btn btn-primary btn-sm sm:btn-md shadow-md hover:shadow-lg transition-all duration-300">Send Request</button>
        </div>
      </div>
    </div>
  );
}
