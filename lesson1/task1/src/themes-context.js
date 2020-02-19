import React from 'react';

export const themes = {
  dark: {
    fontColor: '#ffffff',
    backgroundColor: '#222222'
  },
  light: {
    fontColor: '#000000',
    backgroundColor: '#eeeeee'
  }
};

export const ThemeContext = React.createContext(themes.dark);