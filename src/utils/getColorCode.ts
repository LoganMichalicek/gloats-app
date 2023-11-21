export const generateColorCode = (inputString: string): string => {
  const hashCode = inputString
    .split("")
    .reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  const color = (hashCode & 0x00ffffff).toString(16).toUpperCase();
  return `#${"00000".substring(0, 6 - color.length)}${color}`;
};

export const stringToColour = function (str: string) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};

export const stringToHslColor = function (
  text: string,
  saturation: number = 100,
  lightness: number = 75
) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  return `hsl(${hash % 360}, ${saturation}%, ${lightness}%)`;
};
