export const toCamelCase = (str: string): string => {
    return str
      .toLowerCase() 
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      }) 
      .replace(/\s+/g, '');
  }