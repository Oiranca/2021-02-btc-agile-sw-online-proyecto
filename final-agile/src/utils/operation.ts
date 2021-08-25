export const operation = (
  lastNumbers: string,
  initialNumbers: string,
  operator: string
) => {
  switch (operator) {
    case '+':
      return (Number(initialNumbers) + Number(lastNumbers)).toString();
    case '-':
      return (Number(initialNumbers) - Number(lastNumbers)).toString();
    case '*':
      return (Number(initialNumbers) * Number(lastNumbers)).toString();
    default:
      return '';
  }
};
