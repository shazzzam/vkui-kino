import { Cell, Group, ModalCard } from '@vkontakte/vkui';
import React from 'react';
import { useDispatch } from 'react-redux';

import { goTo, menuClose } from '../../store/app/appActions';

export const Menu = () => {
  const dispatch = useDispatch();

  const clickHandler = (route) => {
    dispatch(menuClose());
    dispatch(goTo(route));
  };

  return (
    <ModalCard header="Меню" onClose={() => dispatch(menuClose())}>
      <Group>
        <Cell onClick={() => clickHandler('films')}>Фильмы</Cell>
        <Cell onClick={() => clickHandler('about')}>О приложении</Cell>
      </Group>
    </ModalCard>
  );
};
