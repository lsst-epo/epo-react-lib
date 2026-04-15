import { Meta, StoryFn } from "@storybook/react";

import SortableTable from ".";

const meta: Meta<typeof SortableTable> = {
  argTypes: {},
  component: SortableTable,
};
export default meta;

const Template: StoryFn<typeof SortableTable> = (args:any ) => {
  return ( 
    <SortableTable tableData={args.tableData}/>
  )
};

export const MultipleRows = Template.bind({});

export const EmptyDataset = Template.bind({});

export const RandomPropertiesTable = Template.bind({});


RandomPropertiesTable.args = {
  "tableData": [{
    "name": "some name",
    "age": 38,
    "city": "Tucson"
  },
  {
    "name": "other name",
    "age": 40,
    "state": "Arizona",
    "country": "U.S."
  }]
};

EmptyDataset.args = { };

MultipleRows.args = { "tableData" : [
  {
    "Object Designation": "29075 (1950 DA)",
    "Year Range": "2880-2880",
    "Potential Impacts": 1,
    "Impact Probability (Percent)": 0.00038,
    "Velocity (km/s)": 14.1,
    "H (mag)": 17.9,
    "Estimated Diameter (m)": 1300,
  },
  {
    "Object Designation": "101955 Bennu (1999 RQ36)",
    "Year Range": "2178-2290",
    "Potential Impacts": 157,
    "Impact Probability (Percent)": 0.00057,
    "Velocity (km/s)": 5.99,
    "H (mag)": 20.6,
    "Estimated Diameter (m)": 490
  },
  {
    "Object Designation": "(2008 JL3)",
    "Year Range": "2027-2122",
    "Potential Impacts": 44,
    "Impact Probability (Percent)": 0.00017,
    "Velocity (km/s)": 8.42,
    "H (mag)": 25.3,
    "Estimated Diameter (m)": 29
  },
  {
    "Object Designation": "(2000 SG344)",
    "Year Range": "2069-2122",
    "Potential Impacts": 300,
    "Impact Probability (Percent)": 0.0027,
    "Velocity (km/s)": 1.36,
    "H (mag)": 24.8,
    "Estimated Diameter (m)": 37
  },
  {
    "Object Designation": "(2010 RF12)",
    "Year Range": "2095-2122",
    "Potential Impacts": 70,
    "Impact Probability (Percent)": 0.1,
    "Velocity (km/s)": 5.1,
    "H (mag)": 28.4,
    "Estimated Diameter (m)": 7
  },
  {
    "Object Designation": "(2015 JJ)",
    "Year Range": "2111-2111",
    "Potential Impacts": 1,
    "Impact Probability (Percent)": 0.000068,
    "Velocity (km/s)": 10.69,
    "H (mag)": 22.1,
    "Estimated Diameter (m)": 130
  },
  {
    "Object Designation": "(2022 PX1)",
    "Year Range": "2040-2040",
    "Potential Impacts": 1,
    "Impact Probability (Percent)": 0.0000032,
    "Velocity (km/s)": 35.11,
    "H (mag)": 22.3,
    "Estimated Diameter (m)": 120
  },
  {
    "Object Designation": "(2005 QK76)",
    "Year Range": "2030-2059",
    "Potential Impacts": 6,
    "Impact Probability (Percent)": 0.000071,
    "Velocity (km/s)": 19.67,
    "H (mag)": 25.2,
    "Estimated Diameter (m)": 31
  },
  {
    "Object Designation": "(2021 GX9)",
    "Year Range": "2032-2052",
    "Potential Impacts": 2,
    "Impact Probability (Percent)": 0.000082,
    "Velocity (km/s)": 16.79,
    "H (mag)": 25.3,
    "Estimated Diameter (m)": 29
  },
  {
    "Object Designation": "(2023 DO)",
    "Year Range": "2057-2092",
    "Potential Impacts": 25,
    "Impact Probability (Percent)": 0.00045,
    "Velocity (km/s)": 6.97,
    "H (mag)": 25.6,
    "Estimated Diameter (m)": 26
  },
  {
    "Object Designation": "620100 (2016 WJ1)",
    "Year Range": "2124-2124",
    "Potential Impacts": 1,
    "Impact Probability (Percent)": 0.0000077,
    "Velocity (km/s)": 14.85,
    "H (mag)": 21.4,
    "Estimated Diameter (m)": 180
  },
  {
    "Object Designation": "(2013 TP4)",
    "Year Range": "2026-2026",
    "Potential Impacts": 1,
    "Impact Probability (Percent)": 0.000035,
    "Velocity (km/s)": 25.3,
    "H (mag)": 27.5,
    "Estimated Diameter (m)": 11
  },
  {
    "Object Designation": "(2019 VB37)",
    "Year Range": "2049-2067",
    "Potential Impacts": 5,
    "Impact Probability (Percent)": 0.000057,
    "Velocity (km/s)": 14.55,
    "H (mag)": 24.5,
    "Estimated Diameter (m)": 43
  },
  {
    "Object Designation": "(2008 UB7)",
    "Year Range": "2044-2101",
    "Potential Impacts": 50,
    "Impact Probability (Percent)": 0.000034,
    "Velocity (km/s)": 18.53,
    "H (mag)": 23.8,
    "Estimated Diameter (m)": 58
  },
  {
    "Object Designation": "(2023 BZ)",
    "Year Range": "2026-2026",
    "Potential Impacts": 1,
    "Impact Probability (Percent)": 0.000038,
    "Velocity (km/s)": 8.25,
    "H (mag)": 26.6,
    "Estimated Diameter (m)": 16
  },
  {
    "Object Designation": "(2024 TK5)",
    "Year Range": "2028-2028",
    "Potential Impacts": 1,
    "Impact Probability (Percent)": 0.00033,
    "Velocity (km/s)": 8.93,
    "H (mag)": 27.7,
    "Estimated Diameter (m)": 10
  },
  {
    "Object Designation": "(2024 JW16)",
    "Year Range": "2082-2121",
    "Potential Impacts": 12,
    "Impact Probability (Percent)": 0.0000023,
    "Velocity (km/s)": 23.93,
    "H (mag)": 21,
    "Estimated Diameter (m)": 220
  },
  {
    "Object Designation": "(2007 DX40)",
    "Year Range": "2035-2122",
    "Potential Impacts": 93,
    "Impact Probability (Percent)": 0.000078,
    "Velocity (km/s)": 15.52,
    "H (mag)": 24.6,
    "Estimated Diameter (m)": 40
  },
  {
    "Object Designation": "(2016 YM4)",
    "Year Range": "2121-2121",
    "Potential Impacts": 1,
    "Impact Probability (Percent)": 0.000013,
    "Velocity (km/s)": 18.98,
    "H (mag)": 22.4,
    "Estimated Diameter (m)": 110
  },
  {
    "Object Designation": "(2000 SB45)",
    "Year Range": "2067-2118",
    "Potential Impacts": 194,
    "Impact Probability (Percent)": 0.00016,
    "Velocity (km/s)": 7.53,
    "H (mag)": 24.3,
    "Estimated Diameter (m)": 46
  },
  {
    "Object Designation": "(2026 CQ4)",
    "Year Range": "2072-2125",
    "Potential Impacts": 39,
    "Impact Probability (Percent)": 0.005,
    "Velocity (km/s)": 5.64,
    "H (mag)": 27.6,
    "Estimated Diameter (m)": 10
  },
  {
    "Object Designation": "(2026 FF3)",
    "Year Range": "2033-2033",
    "Potential Impacts": 1,
    "Impact Probability (Percent)": 0.000049,
    "Velocity (km/s)": 20.17,
    "H (mag)": 26.1,
    "Estimated Diameter (m)": 20
  },
  {
    "Object Designation": "(2025 DT2)",
    "Year Range": "2044-2071",
    "Potential Impacts": 12,
    "Impact Probability (Percent)": 0.00044,
    "Velocity (km/s)": 9.74,
    "H (mag)": 26.6,
    "Estimated Diameter (m)": 16
  },
  {
    "Object Designation": "(2008 EX5)",
    "Year Range": "2056-2093",
    "Potential Impacts": 28,
    "Impact Probability (Percent)": 0.000053,
    "Velocity (km/s)": 9.92,
    "H (mag)": 23.8,
    "Estimated Diameter (m)": 59
  },
  {
    "Object Designation": "(2020 VW)",
    "Year Range": "2074-2079",
    "Potential Impacts": 12,
    "Impact Probability (Percent)": 0.007,
    "Velocity (km/s)": 9.69,
    "H (mag)": 28.3,
    "Estimated Diameter (m)": 7
  },
  {
    "Object Designation": "(2020 VV)",
    "Year Range": "2044-2122",
    "Potential Impacts": 424,
    "Impact Probability (Percent)": 0.0023,
    "Velocity (km/s)": 2.58,
    "H (mag)": 27.3,
    "Estimated Diameter (m)": 12
  },
  {
    "Object Designation": "(2018 DQ)",
    "Year Range": "2027-2121",
    "Potential Impacts": 104,
    "Impact Probability (Percent)": 0.00022,
    "Velocity (km/s)": 20.85,
    "H (mag)": 29.1,
    "Estimated Diameter (m)": 5
  },
  {
    "Object Designation": "(2012 HG2)",
    "Year Range": "2052-2122",
    "Potential Impacts": 689,
    "Impact Probability (Percent)": 0.002,
    "Velocity (km/s)": 3.32,
    "H (mag)": 27,
    "Estimated Diameter (m)": 14
  },
  {
    "Object Designation": "(2017 WT28)",
    "Year Range": "2083-2121",
    "Potential Impacts": 113,
    "Impact Probability (Percent)": 0.012,
    "Velocity (km/s)": 4.47,
    "H (mag)": 28.1,
    "Estimated Diameter (m)": 8
  },
  {
    "Object Designation": "(2013 VW13)",
    "Year Range": "2063-2095",
    "Potential Impacts": 14,
    "Impact Probability (Percent)": 0.00044,
    "Velocity (km/s)": 16.35,
    "H (mag)": 26.2,
    "Estimated Diameter (m)": 19
  },
  {
    "Object Designation": "(2007 KE4)",
    "Year Range": "2029-2096",
    "Potential Impacts": 3,
    "Impact Probability (Percent)": 0.00002,
    "Velocity (km/s)": 10.06,
    "H (mag)": 25.2,
    "Estimated Diameter (m)": 31
  },
  {
    "Object Designation": "(2006 DM63)",
    "Year Range": "2031-2122",
    "Potential Impacts": 46,
    "Impact Probability (Percent)": 0.00014,
    "Velocity (km/s)": 10.37,
    "H (mag)": 26.7,
    "Estimated Diameter (m)": 15
  },
  {
    "Object Designation": "(2023 VD3)",
    "Year Range": "2034-2042",
    "Potential Impacts": 3,
    "Impact Probability (Percent)": 0.00015,
    "Velocity (km/s)": 17.78,
    "H (mag)": 27.1,
    "Estimated Diameter (m)": 13
  },
  {
    "Object Designation": "(2021 GE2)",
    "Year Range": "2030-2030",
    "Potential Impacts": 1,
    "Impact Probability (Percent)": 0.00073,
    "Velocity (km/s)": 15.36,
    "H (mag)": 29.1,
    "Estimated Diameter (m)": 5
  },
  {
    "Object Designation": "(2023 SN8)",
    "Year Range": "2026-2123",
    "Potential Impacts": 6,
    "Impact Probability (Percent)": 0.000086,
    "Velocity (km/s)": 8.03,
    "H (mag)": 28,
    "Estimated Diameter (m)": 9
  },
  {
    "Object Designation": "(2020 UL3)",
    "Year Range": "2122-2124",
    "Potential Impacts": 3,
    "Impact Probability (Percent)": 0.000035,
    "Velocity (km/s)": 10.18,
    "H (mag)": 23.3,
    "Estimated Diameter (m)": 75
  },
  {
    "Object Designation": "(2008 CC71)",
    "Year Range": "2034-2082",
    "Potential Impacts": 32,
    "Impact Probability (Percent)": 0.000041,
    "Velocity (km/s)": 8.05,
    "H (mag)": 24.9,
    "Estimated Diameter (m)": 36
  }
]};