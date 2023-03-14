import React, {useState} from 'react';
import {Botao} from './componets/Botao';
import styled from 'styled-components';
import './style.css';

const Container = styled.div`
  
  background-color:blue;
  color:white;
`;


const App = () => {

  return (
  <>
  <div className='box_div'>
    <h1>Bem vindo ao nosso time, confirme para continuar!</h1>
    <p>Experimente a diferença com AuraFinance - o banco digital que oferece soluções financeiras personalizadas e fáceis de usar.
       Junte-se a nós hoje e comece a gerenciar suas finanças de forma mais inteligente e prática.</p>
       <Container>Texto do componente </Container>
       <Botao />
  </div>
      
  
  </>    
  )
}

export default App;
