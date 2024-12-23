//import React from 'react';
import { User } from 'lucide-react';
import twistedArrow from './twisted-arrow.gif';
//import Resume from './resume.pdf'
import { PixelatedContainer } from '../PixelatedContainer';


export function About() {
  return (
    <PixelatedContainer className="space-y-4">
      <div className="flex items-center gap-4 text-xl text-slate-800 mb-4" style={{lineHeight:'2.5'}}>
        <User className="w-6 h-6" />
        <h2>ABOUT ME</h2>
      </div>
            <p className="text-sm leading-relaxed text-slate-600" style={{ lineHeight: '2.5' }}>
          Welcome to my pixel realm!
      </p>
      <p className="text-sm leading-relaxed text-slate-600" style={{ lineHeight: '2.5' }}>
          Hi everyone, I am Mohana Y from Bengaluru, India.
      </p>
      <p className='text-sm leading-relaxed text-slate-600' style={{ lineHeight: '2.5' }}>
          I completed my Diploma in Computer Science in 2023 @ <b>S J (Govt) Polytechnic.</b>
      </p>
      <p className="text-sm leading-relaxed text-slate-600" style={{ lineHeight: '2.5' }}>
          I am a quick learner with a high level of adaptability. You can find me exploring new technologies or battling bugs in the digital dungeon.
      </p>
      <p className='text-sm leading-relaxed text-slate-600' style={{ lineHeight: '2.5' }}>
      "Beyond coding, I enjoy reading books, traveling in nature, and playing both indoor and outdoor games. Additionally, I have a passion for wildlife photography, where I capture the beauty of the natural world."
      </p>
      <p className="text-sm leading-relaxed text-slate-600" style={{ lineHeight: '2.5' }}>
          Although I am Backend Developer, I refuse to limit myself to that role. For instance, this portfolio was entirely built by me using AI, showcasing my ability to utilize AI to its fullest potential.
      </p>
      
      <div>
          <center><a
          href='/resume' // Link to your resume
          className="bg-transparent border-2 border-black text-black px-6 py-3 rounded-md shadow-lg transition-transform transform hover:scale-105"
          >
          Download CV
          </a></center>
      </div>
      {/* Twisted Arrow GIF */}
      <div className="flex justify-center mb-2">
        <img
          src={twistedArrow} // Use the relative path to the GIF
          alt="twisted arrow"
          className="w-10 h-10" // Adjust size as needed
        />
      </div>
    </PixelatedContainer>
  );
}