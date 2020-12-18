import React, { useEffect, useRef } from 'react';
import { CardGrid, Panel, Spinner } from '@vkontakte/vkui';
import { useDispatch, useSelector } from 'react-redux';

import { MyHeader } from '../../MyHeader/MyHeader';
import {
  setActivePanel,
  requestList,
  requestOne,
} from '../../../store/films/filmsActions';
import './filmList.css';
import { Film } from './Film';

export const FilmsList = () => {
  const films = useSelector((state) => state.films.list);
  const isLoading = useSelector((state) => state.films.listLoader);

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling);
    if (films.length === 0) {
      dispatch(requestList());
    }
    // return () => window.removeEventListener('scroll', trackScrolling);
  });

  const listEl = useRef(null);

  const clickHandler = (id) => {
    dispatch(requestOne(id));
    dispatch(setActivePanel('item'));
  };

  const trackScrolling = () => {
    if (!listEl.current) {
      return;
    }
    const isBottom =
      listEl.current.getBoundingClientRect().bottom <= window.innerHeight;
    if (isBottom) {
      dispatch(requestList());
    }
  };

  const dispatch = useDispatch();
  return (
    <Panel id="list">
      <MyHeader>Топ 250 Фильмов</MyHeader>
      <div ref={listEl}>
        <CardGrid className="films__list">
          {films.map((film) => (
            <Film key={film.filmId} film={film} clickHandler={clickHandler} />
          ))}
        </CardGrid>
        {isLoading || <Spinner />}
      </div>
    </Panel>
  );
};
