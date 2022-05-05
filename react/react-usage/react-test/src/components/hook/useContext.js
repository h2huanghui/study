import React, { useContext } from 'react';
// 主题颜色
const themes = {
  light: {
    foreground: '#000',
    background: '#eee',
  },
  dark: {
    foreground: '#fff',
    background: '#222',
  },
};

//创建Context
const ThemeContext = React.createContext(themes.dark);

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      hello
    </button>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function UseContext() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar></Toolbar>
    </ThemeContext.Provider>
  );
}

export default UseContext;
