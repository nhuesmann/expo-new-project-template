import styled from 'styled-components/native';

import { getScaledFontValues } from '../../utils/font';
import { FontProps } from './props';

const { fontSize, lineHeight, letterSpacing } =
  getScaledFontValues('bodySmall');

export const BodySmallRegularText = styled.Text<FontProps>`
  font-family: ${({ weight = 'regular' }) => `rubik-${weight}`};
  text-align: ${({ textAlign = 'left' }) => textAlign};
  color: ${({ theme, color }) => color || theme.colors.textStandard};
  font-size: ${fontSize}px;
  ${() => lineHeight && `line-height: ${lineHeight}px;`}
  letter-spacing: ${letterSpacing || 0};
`;
