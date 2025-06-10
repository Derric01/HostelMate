import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero min-h-[calc(100vh-5rem)] px-4 py-8 bg-gradient-to-b from-base-100 to-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">HostelMate</h1>
          <p className="py-4 text-base-content/80 text-lg">
            Find your perfect roommate based on shared hobbies and interests.
            HostelMate connects college students looking for compatible hostel roommates.
          </p>
          <div className="flex gap-4 justify-center mt-2">
            <Link href="/signup" className="btn btn-primary shadow-md hover:shadow-lg transition-all duration-300">Get Started</Link>
            <Link href="/login" className="btn btn-outline shadow-sm hover:shadow-md transition-all duration-300">Login</Link>
          </div>
          
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 border border-base-300">
              <div className="card-body items-center text-center p-4 md:p-6">
                <div className="bg-primary/10 p-3 rounded-full mb-3 w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="card-title text-lg">Match by Hobbies</h2>
                <p className="text-sm text-base-content/70">Find roommates who share your interests and lifestyle</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 border border-base-300">
              <div className="card-body items-center text-center p-4 md:p-6">
                <div className="bg-secondary/10 p-3 rounded-full mb-3 w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h2 className="card-title text-lg">Same College</h2>
                <p className="text-sm text-base-content/70">Connect with students from your own college</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 border border-base-300">
              <div className="card-body items-center text-center p-4 md:p-6">
                <div className="bg-accent/10 p-3 rounded-full mb-3 w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h2 className="card-title text-lg">Easy Chat</h2>
                <p className="text-sm text-base-content/70">Message potential roommates before making a decision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
