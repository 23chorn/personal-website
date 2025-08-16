import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    { title: 'React Web App', description: 'A cool web app.', tech: 'React, Tailwind', link: '#' },
    { title: 'Electron App', description: 'Desktop app.', tech: 'Electron, Node.js', link: '#' },
    { title: 'Blockchain Project', description: 'Smart contract demo.', tech: 'Solidity, Web3.js', link: '#' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, idx) => <ProjectCard key={idx} {...p} />)}
      </div>
    </div>
  );
}