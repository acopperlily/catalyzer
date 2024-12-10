const getDateRange = (startYear: number): string => {
  const currentYear: number = new Date().getFullYear();
  let dateRange: string = startYear.toString();
  if (currentYear > startYear) {
    // En dash unicode: \u2013
    dateRange += `\u2013${currentYear}`;
  }
  return dateRange;
};

export default getDateRange;
