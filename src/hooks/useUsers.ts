import { useQuery } from "@tanstack/react-query";
import type { User } from "../types/user";

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Error al obtener los usuarios");
  }

  return response.json();
};

export const useUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return query;
};
