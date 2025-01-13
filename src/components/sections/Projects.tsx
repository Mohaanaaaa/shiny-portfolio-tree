import React, { useState } from 'react';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { PixelatedContainer } from '../PixelatedContainer';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Divine_Bengaluru",
      description: "A easy info about temple built with React-vite",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=200&fit=crop",
      tags: ["React", "CSS", "TypeScript"],
      demoUrl: "https://divine-temple.vercel.app",
      githubUrl: "https://github.com/Mohaanaaaa/Divine-Temple"
    },
    {
      id: 2,
      title: "Weather App",
      description: "8-bit style weather forecasting application",
      image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=300&h=200&fit=crop",
      tags: ["React", "API", "CSS"],
      demoUrl: "https://weather-vigilant.vercel.app",
      githubUrl: "https://github.com/Mohaanaaaa/Weather-vigilant-pancake"
    },
    {
      id: 3,
      title: "terminal portfolio",
      description: "Terminal based portfolio with linux style",
      image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=300&h=200&fit=crop",
      tags: ["React", "CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com/Mohaanaaaa/fictional-terminal-portfolio"
    },
    {
      id: 5,
      title: "Bengaluru roads",
      description: "Helpfull platform to know conditions road/traffic ",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=200&fit=crop",
      tags: ["React", "CSS","MySQL"],
      demoUrl: "#",
      githubUrl: ""
    },
  ];

  return (
    <PixelatedContainer>
      <div className="flex items-center gap-4 text-xl text-slate-800 mb-6">
        <Folder className="w-6 h-6" />
        <h2>PROJECTS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="pixel-border bg-slate-50 overflow-hidden"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-40">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover pixelated"
              />
              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-slate-900/75 flex items-center justify-center gap-4">
                  <a
                    href={project.demoUrl}
                    className="pixel-button bg-blue-500 text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="pixel-button bg-slate-700 text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-sm mb-2 font-bold">{project.title}</h3>
              <p className="text-xs text-slate-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-slate-200 text-slate-700 pixel-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PixelatedContainer>
  );
}
