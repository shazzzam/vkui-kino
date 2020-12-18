import { Icon28ChevronBack, Icon28Menu } from '@vkontakte/icons';
import { PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import { useDispatch, useSelector } from 'react-redux';

import { goBack, menuOpen } from '../../store/app/appActions';

export const MyHeader = ({ customBack, children, noMenu = false }) => {
  const history = useSelector((state) => state.app.history);
  const dispatch = useDispatch();

  const back = customBack ? (
    <PanelHeaderButton onClick={() => customBack()}>
      <Icon28ChevronBack />
    </PanelHeaderButton>
  ) : history.length > 1 ? (
    <PanelHeaderButton onClick={() => dispatch(goBack())}>
      <Icon28ChevronBack />
    </PanelHeaderButton>
  ) : null;

  return (
    <PanelHeader
      left={back}
      right={
        noMenu ? null : (
          <PanelHeaderButton onClick={() => dispatch(menuOpen())}>
            <Icon28Menu />
          </PanelHeaderButton>
        )
      }
    >
      {children}
    </PanelHeader>
  );
};
