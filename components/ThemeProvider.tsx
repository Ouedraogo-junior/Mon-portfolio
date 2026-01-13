// components/ThemeProvider.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Initialiser le thème au montage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    console.log('🎨 Initialisation du thème:', initialTheme);
    console.log('💾 Thème sauvegardé:', savedTheme);
    console.log('🌙 Préfère dark mode:', prefersDark);
    
    setTheme(initialTheme);
    
    // Appliquer immédiatement la classe
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    console.log('✅ Classes HTML après init:', document.documentElement.classList.toString());
  }, []);

  const toggleTheme = () => {
    console.log('🔄 Toggle theme appelé');
    console.log('📍 Thème actuel:', theme);
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    console.log('📍 Nouveau thème:', newTheme);
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Basculer la classe sur le document
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      console.log('➕ Classe dark AJOUTÉE');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('➖ Classe dark RETIRÉE');
    }
    
    console.log('✅ Classes HTML après toggle:', document.documentElement.classList.toString());
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}