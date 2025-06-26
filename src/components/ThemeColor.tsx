import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: 'crimson' | 'aura' | 'field';
  mode: 'light' | 'dark';
  setTheme: (theme: 'crimson' | 'aura' | 'field') => void;
  setMode: (mode: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'crimson' | 'aura' | 'field'>('crimson');
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const body = document.body;
    body.classList.remove('light', 'dark', 'theme-crimson', 'theme-aura', 'theme-field');

    body.classList.add(mode, `theme-${theme}`);

    if (mode === 'light') {
      body.style.backgroundColor = 'white';
    } else {
      body.style.backgroundColor = '#1a202c';
    }
  }, [theme, mode]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeColor: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-inter p-4 flex items-center justify-center">
        <ThemePreview />
      </div>
    </ThemeProvider>
  );
};

const ThemePreview: React.FC = () => {
  const { theme, mode, setTheme, setMode } = useTheme();

  const getThemeColors = (currentTheme: string, currentMode: string) => {
    if (currentMode === 'light') {
      switch (currentTheme) {
        case 'crimson':
          return {
            primary: 'bg-rose text-white',
            secondary: 'bg-[#FF0000] text-rose-800',
            accent: 'bg-[#BB0059] text-black',
          };
        case 'aura':
          return {
            primary: 'bg-yellow-500 text-white',
            secondary: 'bg-yellow-200 text-blue-800',
            accent: 'bg-blue-600 text-white',
          };
        case 'field':
          return {
            primary: 'bg-green-500 text-white',
            secondary: 'bg-green-200 text-green-800',
            accent: 'bg-green-600 text-white',
          };
        default:
          return {};
      }
    } else {
      switch (currentTheme) {
        case 'crimson':
          return {
            primary: 'bg-rose-700 text-white',
            secondary: 'bg-rose-400 text-rose-900',
            accent: 'bg-rose-800 text-white',
          };
        case 'aura':
          return {
            primary: 'bg-blue-700 text-white',
            secondary: 'bg-blue-400 text-blue-900',
            accent: 'bg-blue-800 text-white',
          };
        case 'field':
          return {
            primary: 'bg-green-700 text-white',
            secondary: 'bg-green-400 text-green-900',
            accent: 'bg-green-800 text-white',
          };
        default:
          return {};
      }
    }
  };

  const colors = getThemeColors(theme, mode);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 w-full max-w-2xl'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8 rounded-xl p-4 bg-gray-100 dark:bg-gray-700 shadow-inner">
        <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div className={`w-full h-52 rounded-xl ${colors.secondary}`}></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className={`w-full h-24 rounded-lg ${colors.secondary}`}></div>
          <div className={`w-full h-24 rounded-lg ${colors.primary}`}></div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-gray-800 dark:text-gray-200 font-bold text-lg text-center">Sample Testing</div>
          <button
            className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200
              ${mode === 'light' ? 'bg-pink-300 text-pink-900 hover:bg-pink-400' : 'bg-pink-700 text-pink-100 hover:bg-pink-600'}
            `}
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          >
            {mode === 'light' ? 'Light' : 'Dark'}
          </button>
          <button
            className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200
              ${colors.accent} hover:opacity-90
            `}
            onClick={() => {
              if (theme === 'crimson') {
                setTheme('aura');
              } else if (theme === 'aura') {
                setTheme('field');
              } else {
                setTheme('crimson');
              }
            }}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeColor;