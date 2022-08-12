type RoundNumber = (num: number, decimalPlaces?: number) => number;

export const roundNumber: RoundNumber = (num, decimalPlaces = 0) => {
  const multiplier = 10 ** decimalPlaces;
  return Math.round((num + Number.EPSILON) * multiplier) / multiplier;
};
