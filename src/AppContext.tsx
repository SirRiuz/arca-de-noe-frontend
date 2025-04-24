import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Tipo para el usuario
type User = {
  id: number;
  name: string;
  email: string;
};

// Tipo para el contexto
type AppContextType = {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  register: (username: string, email: string, password1: string, password2: string) => Promise<void>;
  isLoggedIn: () => boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

// Función para obtener una cookie por nombre
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isLoggedIn = () => !!user;

  const login = async (username: string, password: string) => {
    try {
      const csrfToken = getCookie("csrftoken");

      const response = await fetch("http://127.0.0.1:8000/api/auth/login/", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken || "",
        },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      setUser({ id: data.id, name: data.name, email: data.email });
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      const csrfToken = getCookie("csrftoken");

      const response = await fetch("http://127.0.0.1:8000/api/auth/logout/", {
        method: "POST",
        headers: {
          "X-CSRFToken": csrfToken || "",
        },
        credentials: "include",
      });

      if (!response.ok) throw new Error("Logout failed");

      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const register = async (username: string, email: string, password1: string, password2: string) => {
    try {
      const csrfToken = getCookie("csrftoken");

      const response = await fetch("http://127.0.0.1:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken || "",
        },
        credentials: "include",
        body: JSON.stringify({ username, email, password1, password2 }),
      });

      if (!response.ok) throw new Error("Registration failed");

      const data = await response.json();
      setUser({ id: data.id, name: data.name, email: data.email });
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.error("Registration error:", error);
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
