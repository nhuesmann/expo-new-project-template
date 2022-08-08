import styled from 'styled-components/native';

import { scale } from '../../utils';

const LINE_THICKNESS = scale(1);

interface Props {
  px?: number;
  line?: boolean;
  linePadding?: number;
  contentDirection?: 'vertical' | 'horizontal';
}

export const Divider = styled.View<Props>`
  height: ${calcHeight};
  width: ${calcWidth};
  margin: ${calcMarginVertical} ${calcMarginHorizontal};
  border-radius: ${({ line }) => (line ? LINE_THICKNESS : 0)}px;
  background-color: ${({ theme, line }) =>
    line ? theme.colors.symbol : undefined};
`;

/*
 * Calc functions
 */
function calcHeight({ px = 0, line, contentDirection = 'vertical' }: Props) {
  if (line) {
    return contentDirection === 'vertical' ? `${LINE_THICKNESS}px` : '100%';
  }
  return contentDirection === 'vertical' ? `${px}px` : `0px`;
}
function calcWidth({ px = 0, line, contentDirection = 'vertical' }: Props) {
  if (line) {
    return contentDirection === 'vertical' ? '100%' : `${LINE_THICKNESS}px`;
  }
  return contentDirection === 'vertical' ? `0px` : `${px}px`;
}
function calcMarginVertical({
  line,
  linePadding = 0,
  contentDirection = 'vertical',
}: Props) {
  if (!line) {
    return 0;
  }
  return contentDirection === 'vertical' ? `${linePadding}px` : `0px`;
}
function calcMarginHorizontal({
  line,
  linePadding = 0,
  contentDirection = 'vertical',
}: Props) {
  if (!line) {
    return 0;
  }
  return contentDirection === 'vertical' ? `0px` : `${linePadding}px`;
}

/*
 * Logic *

height:
- if has line
  - if line content direction is vertical, LINE_THICKNESS
  - if line content direction is horizontal, 100%
- if no line
  - if content direction is vertical, px
  - if content direction is horiz, 0

width:
- if has line
  - if line content direction is vertical, 100%
  - if line content direction is horizontal, LINE_THICKNESS
- if no line
  - if content direction is vertical, 0
  - if content direction is horiz, px

marginVertical:
- if no line
  - 0
- if has line
  - if line content direction is vertical, linePadding
  - if line content direction is horizontal, 0

marginHorizontal:
- if no line
  - 0
- if has line
  - if line content direction is vertical, 0
  - if line content direction is horizontal, linePadding

*/
