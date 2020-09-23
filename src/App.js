import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const palette = {
    main: '#38d9a9',
    back: '#e9ecef',
    paleGray: '#ced4da',
    highLight: '#ff6b6b',
    border: '#dee2e6'
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${palette.back};
  }
`;

function App() {
  return (
      <TodoProvider>
        <ThemeProvider
            theme={{palette}}
        >
          <GlobalStyle/>
          <TodoTemplate>
              <TodoHead/>
              <TodoList/>
              <TodoCreate/>
          </TodoTemplate>
        </ThemeProvider>
      </TodoProvider>
  );
}

export default App;
