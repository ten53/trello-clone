import React from 'react';
import { Column } from './Column';
import { Card } from './Card';
import { AppContainer } from './styles';

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="Done">
        <Card text="Begin using static typing" />
      </Column>
    </AppContainer>
  );
};

export default App;
