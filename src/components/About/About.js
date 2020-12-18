import { Panel, View, Text, Div } from '@vkontakte/vkui';

import { MyHeader } from '../MyHeader/MyHeader';

export const About = () => {
  return (
    <View activePanel="about-text">
      <Panel id="about-text">
        <MyHeader>О приложении</MyHeader>
        <Div>
          <Text>Приложение Список фильмов с использванием API кинопоиск</Text>
        </Div>
      </Panel>
    </View>
  );
};
