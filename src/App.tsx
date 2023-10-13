import React from 'react';
import './App.css';
import styled from 'styled-components';
import { StyledBtn } from './components/Button.styled';
import { Link } from './components/Link.styled';
import { Menu } from './components/Menu.styled';

function App() {
  return (
    <div className="App">
      <Box>
        <StyledBtn color='red'>Hello</StyledBtn>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  button{
    cursor: pointer;
  }

  ${Link}{
    cursor: zoom-in;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

`