import React from 'react';
import { ModalRoot, Root } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { useSelector } from 'react-redux';

import { Menu } from './components/Menu/Menu';
import { About } from './components/About/About';
import { Films } from './components/Films/Films';

function App() {
  const activeView = useSelector((state) => state.app.activeView);
  const menuState = useSelector((state) => state.app.menuState);

  const modal = (
    <ModalRoot activeModal={menuState ? 'menu' : null}>
      <Menu id="menu" />
    </ModalRoot>
  );

  return (
    <Root activeView={activeView} modal={modal}>
      <Films id="films" />
      <About id="about" />
    </Root>
  );
}

export default App;
