import { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export interface StandardButtonProps extends TouchableOpacityProps {
  text: string;
  iconName?: string;
}

// TODO: fix this!

export const StandardButton: FC<StandardButtonProps> = ({
  text,
  iconName,
  ...touchableProps
}) => (
  // TODO: add theming

  <TouchableOpacity>
    <Text>StandardButton</Text>
  </TouchableOpacity>
);

const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tileBackground};
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
