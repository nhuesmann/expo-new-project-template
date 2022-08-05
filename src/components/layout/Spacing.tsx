import styled from 'styled-components/native';

interface Props {
  px: number;
  axis?: 'x' | 'y';
}

const calculatedHeight = ({ px, axis = 'y' }: Props) => (axis === 'y' ? px : 0);
const calculatedWidth = ({ px, axis = 'y' }: Props) => (axis === 'x' ? px : 0);

export const Spacing = styled.View<Props>`
  height: ${calculatedHeight}px;
  width: ${calculatedWidth}px;
`;
