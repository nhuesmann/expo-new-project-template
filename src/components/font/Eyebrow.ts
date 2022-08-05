import styled from 'styled-components/native';

import { getScaledFontValues } from '../../utils/font';
import { FontProps } from './props';

const { fontSize, lineHeight, letterSpacing } = getScaledFontValues('eyebrow');

export const EyebrowText = styled.Text<FontProps>`
  font-family: ${({ weight = 'medium' }) => `rubik-${weight}`};
  text-align: ${({ textAlign = 'left' }) => textAlign};
  color: ${({ theme, color }) => color || theme.colors.textStandard};
  font-size: ${fontSize}px;
  ${() => lineHeight && `line-height: ${lineHeight}px;`}
  letter-spacing: ${letterSpacing || 0};
  text-transform: uppercase;
`;
