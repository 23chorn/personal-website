type SkillBadgeProps = {
  skill: string;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">{skill}</span>
  );
}