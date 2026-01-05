import { type User } from "../types/user";

interface UserCardProps {
  user: User;
  onClick: (user: User) => void;
}

export const UserCard = ({ user, onClick }: UserCardProps) => {
  return (
    <article
      onClick={() => onClick(user)}
      className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 
                 hover:shadow-md hover:border-blue-300 hover:-translate-y-1 
                 transition-all cursor-pointer flex flex-col gap-2"
    >
      <div className="flex items-center gap-3 mb-2">
        {/* Avatar generado con la inicial */}
        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
          {user.name.charAt(0)}
        </div>
        <h3 className="font-bold text-lg text-slate-800 truncate">
          {user.name}
        </h3>
      </div>

      <div className="text-sm text-slate-600 space-y-1">
        <p className="flex items-center gap-2">
          <span className="text-slate-400">✉️</span> {user.email}
        </p>
        <p className="flex items-center gap-2">
          <span className="text-slate-400">🗺️</span> {user.address.city}
        </p>
      </div>
    </article>
  );
};
