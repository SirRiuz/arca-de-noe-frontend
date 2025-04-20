import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type AppContextType = {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  register: (username: string, email: string, password1: string, password2: string) => Promise<void>;
  isLoggedIn: () => boolean; // Función para verificar si el usuario está autenticado
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Función para verificar si el usuario está logueado
  const isLoggedIn = () => {
    return !!user;
  };

  // Login function with fetch
  const login = async (username: string, password: string) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setUser({ id: data.id, name: data.name, email: data.email });
      localStorage.setItem("user", JSON.stringify({ id: data.id, name: data.name, email: data.email }));
    } catch (error) {
      console.error(error);
    }
  };

  // Logout function with fetch
  const logout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/logout", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error(error);
    }
  };

  // Register function with fetch
  const register = async (username: string, email: string, password1: string, password2: string) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password1, password2 }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      setUser({ id: data.id, name: data.name, email: data.email });
      localStorage.setItem("user", JSON.stringify({ id: data.id, name: data.name, email: data.email }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider value={{ isAuthenticated: !!user, user, login, logout, register, isLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
