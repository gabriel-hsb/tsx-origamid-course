export const firstLetterToUpperCase = (string: string): string => {
  const stringCopy = string.split("");
  let result = "";

  stringCopy.forEach((letter, idx) => {
    if (idx === 0) {
      result += letter.toUpperCase();
    } else {
      result += letter;
    }
  });

  return result;
};
