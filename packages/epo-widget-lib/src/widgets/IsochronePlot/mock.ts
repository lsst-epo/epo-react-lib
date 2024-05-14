export const getAgeLibrary = async () => {
  const ageValues = [
    "9.0",
    "9.1",
    "9.2",
    "9.3",
    "9.4",
    "9.5",
    "9.6",
    "9.7",
    "9.8",
  ];
  const ages: Record<string, Array<any>> = {};

  ageValues.forEach(async (age) => {
    const { default: json } = await import(`./mock/iso_age${age}.json`);

    ages[age] = Object.keys(json.color).map((key) => {
      return { x: json.color[key].toFixed(2), y: json.Mag[key].toFixed(2) };
    });
  });

  return { ages };
};
