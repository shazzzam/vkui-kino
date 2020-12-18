import React from 'react';
import { Card, Title, Text } from '@vkontakte/vkui';

export const Film = ({ film, clickHandler }) => {
  return (
    <Card
      className="films__card"
      size="l"
      mode="outline"
      onClick={() => clickHandler(film.filmId)}
    >
      <div className="films__card-inner">
        <img src={film.posterUrlPreview} alt={film.nameRu} height="200" />
        <div className="films__card-content">
          <Title level="3" className="films__card-title">
            {film.nameRu}
          </Title>
          <Text>Рейтинг: {film.rating}</Text>
          <Text>Год: {film.year}</Text>
          <Text>Продолжительность: {film.filmLength}</Text>
          <Text>
            Производство:{' '}
            {film.countries.map((one) => (
              <span key={one.country} className="films__card-tag">
                {one.country}
              </span>
            ))}
          </Text>
          <Text>
            Производство:{' '}
            {film.genres.map((one) => (
              <span key={one.genre} className="films__card-tag">
                {one.genre}
              </span>
            ))}
          </Text>
        </div>
      </div>
    </Card>
  );
};
