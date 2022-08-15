import { FC } from 'react';
import styled, { useTheme } from 'styled-components/native';

import { IcoMoon, icoMoonIconNames } from '../../config';
import { BodyMediumText } from '../font';

interface Props {
  text: string;
  rightText?: string;
  checked?: boolean;
  onPress?: () => void;
  loading?: boolean;
}

export const CheckListItem: FC<Props> = ({
  text,
  rightText,
  checked,
  onPress,
  loading,
}) => {
  const theme = useTheme();

  return (
    <TouchableContainer
      onPress={loading ? undefined : onPress}
      activeOpacity={typeof onPress === 'function' ? undefined : 1}
      sentry-label={`${text} Button`}
    >
      <BodyMediumText>{text}</BodyMediumText>
      {checked ? (
        <IcoMoon
          name={icoMoonIconNames.check}
          size={theme.sizes.icon.sizeSmall}
          color={theme.colors.hero}
        />
      ) : rightText ? (
        <BodyMediumText>{rightText}</BodyMediumText>
      ) : null}
    </TouchableContainer>
  );
};

const TouchableContainer = styled.TouchableOpacity`
  flex-direction: row;
  height: ${({ theme }) => theme.sizes.button.heightStandard}px;
  width: 100%;
  padding: ${({ theme }) => theme.sizes.spacing.small}px 0px;
  justify-content: space-between;
  align-items: center;
`;
