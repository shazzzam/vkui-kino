import React from 'react';
import { View } from '@vkontakte/vkui';
import { useSelector } from 'react-redux';

import { FilmsList } from './components/FilmsList';
import { FilmDetail } from './components/FilmDetail';

export const Films = () => {
  const activePanel = useSelector((state) => state.films.activePanel);

  return (
    <View activePanel={activePanel}>
      <FilmsList id="list" />
      <FilmDetail id="item" />
    </View>
  );
};
