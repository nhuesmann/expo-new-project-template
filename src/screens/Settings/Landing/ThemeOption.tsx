import { FC } from 'react';

import { CheckListItem } from '../../../components';
import { useStoreActions, useStoreState } from '../../../store';
import type { ThemeAppearanceModeSetting } from '../../../types';

interface Props {
  appearanceMode: ThemeAppearanceModeSetting;
  label: string;
}

export const ThemeOption: FC<Props> = ({ appearanceMode, label }) => {
  const checked = useStoreState((state) =>
    state.settings.isAppearanceModeSelected(appearanceMode)
  );
  const setAppearanceMode = useStoreActions(
    (actions) => actions.settings.setAppearanceMode
  );

  function onPress() {
    setAppearanceMode(appearanceMode);
  }

  return <CheckListItem text={label} onPress={onPress} checked={checked} />;
};
