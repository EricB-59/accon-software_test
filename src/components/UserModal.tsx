import { createPortal } from "react-dom";
import type { User } from "../types/user";

interface UserModalProps {
  user: User | null;
  onClose: () => void;
}

export const UserModal = ({ user, onClose }: UserModalProps) => {
  if (!user) return null;

  // Manejador para cerrar si haces clic fuera del contenido (backdrop)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in">
        {/* Cabecera */}
        <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-800">{user.name}</h2>
          <button
            onClick={onClose}
            className="text-slate-800 text-3xl hover:text-slate-600 hover:bg-slate-200 rounded-full p-2 px-4 transition-colors cursor-pointer font-bold"
          >
            ✕
          </button>
        </div>

        {/* Contenido del Modal */}
        <div className="p-6 space-y-4 text-slate-700">
          {/* Sección Contacto */}
          <div>
            <h4 className="font-semibold text-sm text-slate-400 uppercase tracking-wider mb-2">
              Contacto
            </h4>
            <p>📞 {user.phone}</p>
            <p>
              🌐{" "}
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                {user.website}
              </a>
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Sección Trabajo */}
          <div>
            <h4 className="font-semibold text-sm text-slate-400 uppercase tracking-wider mb-2">
              Compañía
            </h4>
            <p className="font-medium text-lg">{user.company.name}</p>
            <p className="italic text-slate-500">
              "{user.company.catchPhrase}"
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Sección Dirección */}
          <div>
            <h4 className="font-semibold text-sm text-slate-400 uppercase tracking-wider mb-2">
              Dirección
            </h4>
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
