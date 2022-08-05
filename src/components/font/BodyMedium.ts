import styled from 'styled-components/native';

import { getScaledFontValues } from '../../utils/font';
import { FontProps } from './props';

const { fontSize, lineHeight, letterSpacing } =
  getScaledFontValues('bodyMedium');

export const BodyMediumText = styled.Text<FontProps>`
  font-family: ${({ weight = 'medium' }) => `rubik-${weight}`};
  text-align: ${({ textAlign = 'left' }) => textAlign};
  color: ${({ theme, color }) => color || theme.colors.textStandard};
  font-size: ${fontSize}px;
  line-height: ${lineHeight ? `${lineHeight}px` : 'normal'};
  letter-spacing: ${letterSpacing || 0}%;
`;
