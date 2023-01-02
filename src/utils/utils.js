export const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const upFirst = str => str.charAt(0).toUpperCase();
