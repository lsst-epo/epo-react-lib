export const getAgeLibrary = async () => {
  const ageValues = ["7.5", "8.0", "8.5", "9.0", "9.5", "10.0"];
  const ages: Record<string, Array<any>> = {};

  ageValues.forEach(async (age) => {
    const json = await import(`./mock/iso_age${age}.json`);

    ages[age] = json.default;
  });

  return { ages };
};
