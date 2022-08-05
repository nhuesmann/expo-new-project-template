const hero = '#15E885';
const transparent = '#FFFFFF00';
const slateGray = '#131313';

/*


dark mode
dark gray
#2F2F2F
medium gray
#5A5A5A
white
#FFFFFF


light mode
dark gray
#828282
medium gray
#B8B8B8
light gray
#F1F1F1


* DARK MODE *

! the types
background
icon
textStandard
textFaded
- 70,60,50,40 alphas
- 70 - settings headings
- 60 - country codes
- 50 - buttons & search
- 40 - numbers on side of graph



textStandard
text




search bar text:
- ffffff at 50%, so bleedthrough
- measured at 140,140,140
- hex:  #8C8C8C


TODO: update after soren changes figma
- will be all grays rather than white alphas
- add this to the main theme file
- to setup with styled comp
- add toggle to main screen to demo

*/

const DARK_THEME_COLORS = {
  transparent,
  hero,
  slateGray,
  darkGray: '#2F2F2F',
  mediumGray: '#5A5A5A',
};
