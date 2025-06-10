'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { avatarPlaceholder } from './avatar-placeholder';

export default function ChatBox({ conversation = null }) {
  const [messages, setMessages] = useState(conversation?.messages || []);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Default conversation if none provided
  const defaultConversation = {
    userId: 2,
    userName: "Michael Brown",
    userImage: avatarPlaceholder,
    messages: [
      { id: 1, text: "Hey there! I saw we matched at 85%. That's awesome!", sender: 2, timestamp: "9:30 AM" },
      { id: 2, text: "Hi! Yes, looks like we have a lot of hobbies in common.", sender: 1, timestamp: "9:32 AM" },
      { id: 3, text: "I'm looking for a roommate starting next semester. Are you still searching?", sender: 2, timestamp: "9:35 AM" },
      { id: 4, text: "Yes, I am! I'm hoping to find someone who's tidy and doesn't stay up too late. What about you?", sender: 1, timestamp: "9:40 AM" },
    ]
  };

  // If no conversation is provided, use the default one
  useEffect(() => {
    if (!conversation) {
      setMessages(defaultConversation.messages);
    }
  }, [conversation]);

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add new message to the chat
    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: 1, // Current user
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };  return (
    <div className="flex flex-col h-full bg-base-200 rounded-lg overflow-hidden shadow-md w-full">
      {/* Chat header */}
      <div className="bg-base-100 p-3 flex items-center gap-3 border-b border-base-300">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative">
            <Image 
              src={conversation?.userImage || avatarPlaceholder}
              alt={conversation?.userName || defaultConversation.userName}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold">{conversation?.userName || defaultConversation.userName}</h3>
          <div className="text-xs text-success">Online</div>
        </div>
      </div>
      
      {/* Messages container */}
      <div className="flex-1 p-3 md:p-4 overflow-y-auto" style={{ backgroundImage: 'radial-gradient(circle at center, var(--b2) 0%, var(--b3) 100%)' }}>
        <div className="flex flex-col gap-3">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`chat ${msg.sender === 1 ? 'chat-end' : 'chat-start'}`}
            >
              <div className="chat-image avatar">
                <div className="w-10 h-10 rounded-full ring ring-offset-base-100 ring-offset-2 ring-primary/60 relative">
                  <Image 
                    src={msg.sender === 1 ? avatarPlaceholder : (conversation?.userImage || avatarPlaceholder)}
                    alt={msg.sender === 1 ? "You" : (conversation?.userName || "User")}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              </div>
              <div className={`chat-bubble ${msg.sender === 1 ? 'chat-bubble-primary shadow-sm' : 'shadow-sm'}`}>
                {msg.text}
              </div>
              <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                {msg.timestamp}
                {msg.sender === 1 && (
                  <div className="w-3 h-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Message input */}
      <form onSubmit={handleSendMessage} className="bg-base-100 p-3 flex gap-2 border-t border-base-300">
        <input 
          type="text" 
          placeholder="Type a message..." 
          className="input input-bordered flex-1 focus:input-primary transition-colors duration-200" 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />        <button type="submit" className="btn btn-primary shadow-sm hover:shadow-md transition-all duration-300" disabled={!newMessage.trim()}>
          <div className="w-5 h-5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </button>
      </form>
    </div>
  );
}
