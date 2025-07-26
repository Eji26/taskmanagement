import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user on app load
    const storedUser = localStorage.getItem('clarity_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call with localStorage
      const users = JSON.parse(localStorage.getItem('clarity_users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        const userData = { id: user.id, username: user.username, email: user.email };
        setUser(userData);
        localStorage.setItem('clarity_user', JSON.stringify(userData));
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call with localStorage
      const users = JSON.parse(localStorage.getItem('clarity_users') || '[]');
      
      // Check if user already exists
      if (users.find((u: any) => u.email === email)) {
        return false;
      }

      const newUser = {
        id: Date.now().toString(),
        username,
        email,
        password,
        created_at: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem('clarity_users', JSON.stringify(users));

      const userData = { id: newUser.id, username: newUser.username, email: newUser.email };
      setUser(userData);
      localStorage.setItem('clarity_user', JSON.stringify(userData));
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('clarity_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};