import React from 'react'
import personalData from '../utils/personalData';
import { FaArrowUp } from 'react-icons/fa';
import ShinyText from '../ui/ShinyText';
import ScrambledText from '../ui/ScrambleText';
function Footer() {
    const {
        name,
        address,
        role,
        phone,
        email,
        github,
        facebook,
        instagram,
        telegram,
        twitter,
        avatar,
      } = personalData;
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
   <footer>
    <button onClick={scrollToTop} className='fixed bottom-4 right-4 z-50 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors duration-300 cursor-pointer p-2 rounded-full text-white hover:text-pink-400 mb-4'><FaArrowUp /></button>

        <div className='flex flex-col items-center justify-center gap-4 py-4  backdrop-blur-md border-t border-gray-700/50 px-15 text-center'>
            <div>
            <ScrambledText radius={100} duration={1.2} speed={0.5} scrambleChars=".:" className="text-white/70" style={{ cursor: "pointer" }}>CopyRight &copy; {new Date().getFullYear()} {name}. All rights reserved.</ScrambledText>
        </div>
        <div>
            <ScrambledText radius={100} duration={1.2} speed={0.5} scrambleChars=".:" className="text-white/70" style={{ cursor: "pointer" }}>Developed by {name}</ScrambledText>
        </div>
        
    </div>
   </footer>
  )
}

export default Footer