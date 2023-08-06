import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import { Button } from 'antd';

function App() {
  return (
    <Pane display='flex' alignItems='center'>
      <Button type='primary'>Click me!</Button>
      <Text>This is a clickable Button</Text>
    </Pane>
  );
}

export default App;
