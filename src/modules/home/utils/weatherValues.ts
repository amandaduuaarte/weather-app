export const handleVisibility = (visibility: number) => {
  const formattedValue = visibility / 1000;
  return `${formattedValue}KM`;
};
