import React from 'react';
import { Div, Title, Text, Panel, Spinner, Caption } from '@vkontakte/vkui';
import { useDispatch, useSelector } from 'react-redux';

import { MyHeader } from '../../MyHeader/MyHeader';
import { setActivePanel } from '../../../store/films/filmsActions';
import './filmDetail.css';

export const FilmDetail = () => {
  const dispatch = useDispatch();
  const film = useSelector((state) => state.films.film);
  const isLoading = useSelector((state) => state.films.filmLoader);

  return (
    <Panel id="item">
      <MyHeader customBack={() => dispatch(setActivePanel('list'))}>
        Один фильм
      </MyHeader>
      <Div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="film">
            <div className="film__left">
              <Title level="2">{film.nameRu}</Title>
              <Caption level="3">{film.slogan}</Caption>
              <Text>Год: {film.year}</Text>
              <Text>Продолжительность: {film.filmLength}</Text>
              <Text>Возрстные ограничения: {film.ratingAgeLimits}</Text>
              <Text>
                Производство:{' '}
                {film.countries.map((one) => (
                  <span className="film__tag" key={one.country}>
                    {one.country}
                  </span>
                ))}
              </Text>
              <Text>
                Жанр:{' '}
                {film.genres.map((one) => (
                  <span className="film__tag" key={one.genre}>
                    {one.genre}
                  </span>
                ))}
              </Text>
            </div>
            <div className="film__right">
              <img src={film.posterUrlPreview} alt={film.nameRu} height="400" />
            </div>
            <div className="film__bottom">
              <Text>{film.description}</Text>
            </div>
            <Title className="film__facts-title" level="3">
              Факты о фильме
            </Title>
            <ul className="film__facts">
              {film.facts.map((fact) => (
                <li key={fact.slice(0, 10)}>{fact}</li>
              ))}
            </ul>
          </div>
        )}
      </Div>
    </Panel>
  );
};
