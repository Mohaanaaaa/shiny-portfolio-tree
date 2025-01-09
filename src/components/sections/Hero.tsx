//import React from 'react';

const skills = [
  { name: "HTML", percentage: 90, category: 'frontend'},
  { name: "React.js", percentage: 90, category: 'frontend' },
  { name: "TypeScript", percentage: 60, category: 'frontend' },
  { name: "CSS/Tailwind", percentage: 65, category: 'frontend' },
  { name: "AWS", percentage: 43, category: 'backend' },
  { name: "Node.js", percentage: 85, category: 'backend' },
  { name: "MongoDB", percentage: 55, category: 'backend' },
  { name: "MySQL", percentage: 70, category: 'backend'},
  { name: "Git", percentage: 61, category: 'tools' },
  { name: "Postman", percentage: 70, category: 'tools' },
];

// Mapping of skill names to icon URLs
const skillIcons: { [key: string]: string } = {
  "HTML": "https://img.icons8.com/color/48/000000/html-5.png",
  "React.js": "https://img.icons8.com/color/48/000000/react-native.png",
  "TypeScript": "https://img.icons8.com/Color/48/000000/typescript.png",
  "Node.js": "https://img.icons8.com/color/48/000000/nodejs.png",
  "CSS/Tailwind": "https://img.icons8.com/color/48/000000/css3.png",
  "Git": "https://img.icons8.com/color/48/000000/git.png",
  "Docker": "https://img.icons8.com/color/48/000000/docker.png",
  "Postman": "https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000",
  "AWS": "https://img.icons8.com/color/48/000000/amazon-web-services.png",
  "MongoDB": "https://img.icons8.com/color/48/000000/mongodb.png",
  "MySQL": "https://img.icons8.com/color/48/000000/mysql.png"
};

export function Hero() {
  return (
    <header className="text-center">
      <div className="inline-block">
        <img
          src="https://images.unsplash.com/photo-1566837945700-30057527ade0?w=200&h=200&fit=crop"
          alt="Pixel Avatar"
          className="w-32 h-32 mx-auto mb-6 pixelated pixel-border"
        />
      </div>
      <h1 className="text-4xl mb-4 text-slate-800" style={{lineHeight:'1.6'}}> DEV &gt;&gt; Mohanaa</h1>
      <p className="text-lg text-slate-600" style={{lineHeight:'2.5'}}>LEVEL 07 FRONTEND & BACKEND WIZARD</p>

      {/* Icon Section */}
      <div className="flex justify-center flex-wrap mb-6">
        {skills.map(skill => (
          <div key={skill.name} className="flex flex-col items-center mx-5  my-10">
            <div className="transition-transform transform hover:scale-130 hover:opacity-100 opacity-50">
              <img 
                src={skillIcons[skill.name]} 
                alt={skill.name} 
                className="w-12 h-12 mb-1"
              />
            </div>
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
