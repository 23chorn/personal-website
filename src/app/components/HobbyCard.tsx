import Link from 'next/link';

type HobbyCardProps = {
  name: string;
  link: string;
  icon?: string;
  username?: string;
  description?: string;
  rating?: string | null;
};

export default function HobbyCard({ name, link, icon, username, description, rating }: HobbyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex gap-4 hover:shadow-lg transition">
      {icon && (
        <img
          src={icon}
          alt={name}
          className="w-16 h-16 object-contain"
        />
      )}
      <div>
        <Link href={link} target="_blank" className="text-xl font-semibold text-indigo-700 hover:underline flex items-center gap-2">
          {name}
        </Link>
        {username && (
          <div className="text-sm text-gray-500 mb-1">Username: <span className="font-mono">{username}</span></div>
        )}
        {description && (
          <div className="text-gray-700 mb-1">{description}</div>
        )}
        {rating && (
          <div className="text-sm text-green-600 font-semibold">{rating}</div>
        )}
      </div>
    </div>
  );
}