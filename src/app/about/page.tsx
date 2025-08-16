import SkillBadge from '../components/SkillBadge';

export default function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">Short professional bio here.</p>
      <h2 className="text-2xl font-bold mt-4 mb-2">Skills</h2>
      <div className="flex flex-wrap">
        <SkillBadge skill="React" />
        <SkillBadge skill="Node.js" />
        <SkillBadge skill="Electron" />
        <SkillBadge skill="Blockchain" />
      </div>
    </div>
  );
}