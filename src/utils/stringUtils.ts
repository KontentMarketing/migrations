export const shortenCodename = (str: string): string =>
  str.length > 55 ? str.slice(5) : str;
