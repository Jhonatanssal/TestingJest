const reverseString = string => {
  if (typeof string === 'string') {
    const ans = string.split('').reverse().join('');
    return ans;
  }
  const ans = string.toString().split('').reverse().join('');
  return Number(ans);
};

module.exports = reverseString;