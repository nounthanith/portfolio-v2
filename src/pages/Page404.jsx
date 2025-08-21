import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShinyText from "../ui/ShinyText";
import ScrambleText from "../ui/ScrambleText";

function Page404() {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6 text-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
        <ShinyText
          className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          text="404"
          disabled={false}
          speed={1.5}
        />
      </div>
      
      <div className="mt-8 space-y-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-white">
          <ScrambleText speed={0.5}>
            Oops! Page Not Found
          </ScrambleText>
        </h2>
        
        <p className="text-gray-300 text-lg leading-relaxed">
          The page you're looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        
        <div className="pt-6">
          <Link 
            to="/" 
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 hover:scale-105 transform-gpu"
          >
            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="relative flex items-center space-x-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Back to Homepage</span>
            </span>
          </Link>
        </div>
        
        
        
      </div>
    </div>
  );
}

export default Page404;
