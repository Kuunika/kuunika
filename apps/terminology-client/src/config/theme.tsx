export const theme = {
  color: 'rgb(119, 85, 204)',
  lightColor: 'rgb(145, 121, 205)',
  lightDarkColor: 'rgb(99, 54, 195);',
  darkColor: 'rgba(34, 17, 80, 1)'
};
export const getThemeColor = (transparency = 1) => {
  return `rgba(119, 85, 204,${transparency})`;
};
