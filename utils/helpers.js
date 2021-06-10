module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_plural: (word, number) => {
    // to say stuff like 2 comments instead of 2 comment
    if (number !== 1) {
      return `${word}s`;
    }
    return word;
  }
};