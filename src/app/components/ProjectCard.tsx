type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  link?: string;
};

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
      <p className="text-sm text-gray-500">{tech}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          View Project
        </a>
      )}
    </div>
  );
}