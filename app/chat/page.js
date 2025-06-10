'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ChatBox from '@/components/ChatBox';
import { avatarPlaceholder } from '@/components/avatar-placeholder';

export default function Chat() {
  const [activeChat, setActiveChat] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate fetching conversations
    // In a real app, this would be an API call
    const mockConversations = [
      {
        id: 1,
        userId: 2,
        userName: "Michael Brown",
        userImage: avatarPlaceholder,
        lastMessage: "I'm looking for a roommate starting next semester. Are you still searching?",
        timestamp: "9:35 AM",
        unread: true,
        messages: [
          { id: 1, text: "Hey there! I saw we matched at 85%. That's awesome!", sender: 2, timestamp: "9:30 AM" },
          { id: 2, text: "Hi! Yes, looks like we have a lot of hobbies in common.", sender: 1, timestamp: "9:32 AM" },
          { id: 3, text: "I'm looking for a roommate starting next semester. Are you still searching?", sender: 2, timestamp: "9:35 AM" },
        ]
      },
      {
        id: 2,
        userId: 3,
        userName: "Emily Davis",
        userImage: avatarPlaceholder,
        lastMessage: "Would you be okay with having a small plant collection in the room?",
        timestamp: "Yesterday",
        unread: false,
        messages: [
          { id: 1, text: "Hello! I noticed we both like reading and hiking.", sender: 3, timestamp: "Yesterday" },
          { id: 2, text: "Hi Emily! Yes, those are two of my favorite hobbies.", sender: 1, timestamp: "Yesterday" },
          { id: 3, text: "Would you be okay with having a small plant collection in the room?", sender: 3, timestamp: "Yesterday" },
        ]
      },
      {
        id: 3,
        userId: 4,
        userName: "James Wilson",
        userImage: avatarPlaceholder,
        lastMessage: "I usually wake up around 6am for morning workouts. Is that an issue?",
        timestamp: "2 days ago",
        unread: false,
        messages: [
          { id: 1, text: "Hey! Thanks for accepting my request.", sender: 4, timestamp: "2 days ago" },
          { id: 2, text: "No problem! Your profile mentioned you're an early riser?", sender: 1, timestamp: "2 days ago" },
          { id: 3, text: "I usually wake up around 6am for morning workouts. Is that an issue?", sender: 4, timestamp: "2 days ago" },
        ]
      }
    ];
    
    setConversations(mockConversations);
    // Set the first conversation as active by default
    if (mockConversations.length > 0) {
      setActiveChat(mockConversations[0]);
    }
  }, []);

  const filteredConversations = conversations.filter(conversation =>
    conversation.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChatSelect = (conversation) => {
    setActiveChat(conversation);
    
    // Mark as read (in a real app, this would also make an API call)
    setConversations(prev => 
      prev.map(conv => 
        conv.id === conversation.id 
          ? { ...conv, unread: false } 
          : conv
      )
    );
  };
  return (
    <div className="py-4 sm:py-6 lg:py-8 container mx-auto px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Messages</h1>
      
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-[calc(100vh-12rem)] bg-base-200 rounded-xl overflow-hidden shadow-md border border-base-300">
        {/* Conversation list */}
        <div className="w-full md:w-1/3 h-full flex flex-col bg-base-100 md:border-r border-base-300">
          <div className="p-3 border-b border-base-300">
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="input input-bordered w-full focus:input-primary transition-colors duration-200" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="overflow-y-auto flex-1">
            {filteredConversations.length > 0 ? (
              <ul className="menu p-2 gap-1">
                {filteredConversations.map((conversation) => (
                  <li key={conversation.id}>
                    <button 
                      className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 hover:bg-base-200 ${activeChat?.id === conversation.id ? 'bg-primary/10 hover:bg-primary/20' : ''}`}
                      onClick={() => handleChatSelect(conversation)}
                    >
                      <div className="avatar">
                        <div className="w-10 h-10 rounded-full ring ring-offset-base-100 ring-offset-2 ring-primary/60 relative">
                          <Image 
                            src={conversation.userImage}
                            alt={conversation.userName}
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <h3 className="font-bold truncate">{conversation.userName}</h3>
                          <span className="text-xs opacity-60">{conversation.timestamp}</span>
                        </div>
                        <p className="text-sm truncate opacity-70">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread && (
                        <div className="badge badge-sm badge-primary"></div>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex items-center justify-center h-full p-4">
                <p className="text-center opacity-60">No conversations found</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Chat area */}
        <div className="w-full md:w-2/3 h-full bg-base-100 flex">
          {activeChat ? (
            <ChatBox conversation={activeChat} />
          ) : (
            <div className="flex items-center justify-center h-full w-full">
              <div className="text-center opacity-60 p-6">
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-base-content/40 object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p>Select a conversation to start chatting</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
