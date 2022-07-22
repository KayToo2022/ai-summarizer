import logo from './logo.svg';
import './App.css';

import {defaultTheme, Provider, Switch, Flex, View} from '@adobe/react-spectrum';
import { useState, useEffect } from 'react';

import {Header} from './components/Header/Header'
import { PayloadConfig } from './components/PayloadConfig'

function App() {
  const [isDark, toggleDark] = useState(window.matchMedia("(prefers-color-scheme: dark)"))
  return (
    <Provider 
      theme={defaultTheme}
      colorScheme = {isDark ? 'dark' : 'light'}
    >
      <View height='100vh'>
        <Flex direction='column' height='100%'>
          {/* Content goes here */}
          <Header
            {...{
              isDark: isDark,
              onThemeToggle: toggleDark
            }}
          />

          <PayloadConfig/>
          
        </Flex>
      </View>
      
      
    </Provider>
  );
}

export default App;
