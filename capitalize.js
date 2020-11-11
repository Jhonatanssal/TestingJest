const capitalize = string => {
  if (typeof (string) === 'string') {
    const ans = string[0].toUpperCase() + string.slice(1).toLowerCase();
    return ans;
  }
  return `${string} is not a string`;
};

module.exports = capitalize;