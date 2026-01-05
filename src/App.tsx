import { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import { UserCard } from "./components/UserCard";
import { UserModal } from "./components/UserModal";
import type { User } from "./types/user";

function App() {
  const { data: users, isLoading, isError } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [search, setSearch] = useState(""); // Estado para el filtro

  // Lógica de filtrado
  const filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );

  if (isError)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 bg-slate-50 font-bold">
        <p>
          Hubo un error al cargar los usuarios. Por favor intenta más tarde.
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header con Buscador */}
        <header className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Directorio de Usuarios
          </h1>
          <input
            type="text"
            placeholder="Buscar por nombre..."
            className="w-full md:w-80 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </header>

        {/* Grid Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers?.map((user) => (
            <UserCard key={user.id} user={user} onClick={setSelectedUser} />
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {filteredUsers?.length === 0 && (
          <p className="text-center text-slate-500 mt-10">
            No se encontraron usuarios con ese nombre.
          </p>
        )}

        {/* Modal */}
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      </div>
    </div>
  );
}

export default App;
