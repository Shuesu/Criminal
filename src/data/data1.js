export const crimeData = {
  categories: [
    {
      id: "murder",
      name: "Murder",
      hasCities: true,
      defaultStats: 4.47,
      cities: [
        {
          id: "newYork",
          name: "New York",
          chartData: [
            { name: '2015', value: 12 },
            { name: '2016', value: 11 },
            { name: '2017', value: 13 },
            { name: '2018', value: 14 },
            { name: '2019', value: 15 },
            { name: '2020', value: 9 },
            { name: '2021', value: 12 },
            { name: '2022', value: 6 },
          ],
          stats: 4.80,
          textScroll: "Murder rate in New York has decreased by 20% since 2015."
        },
        {
          id: "losAngeles",
          name: "Los Angeles",
          chartData: [
            { name: '2015', value: 10 },
            { name: '2016', value: 12 },
            { name: '2017', value: 11 },
            { name: '2018', value: 13 },
            { name: '2019', value: 14 },
            { name: '2020', value: 8 },
            { name: '2021', value: 9 },
            { name: '2022', value: 7 },
          ],
          stats: 4.77,
          textScroll: "Los Angeles murder rate shows fluctuation over the years."
        }
      ],
      defaultData: {
        chartData: [
          { name: '2015', value: 14 },
          { name: '2016', value: 13 },
          { name: '2017', value: 15 },
          { name: '2018', value: 17 },
          { name: '2019', value: 16 },
          { name: '2020', value: 7 },
          { name: '2021', value: 10 },
          { name: '2022', value: 5 },
        ],
        textScroll: "National murder rate statistics across all cities."
      }
    },
    {
      id: "robbery",
      name: "Robbery",
      hasCities: false,
      defaultStats: 4.43,
      chartData: [
        { name: '2015', value: 16 },
        { name: '2016', value: 14 },
        { name: '2017', value: 13 },
        { name: '2018', value: 15 },
        { name: '2019', value: 18 },
        { name: '2020', value: 10 },
        { name: '2021', value: 13 },
        { name: '2022', value: 9 },
      ],
      textScroll: "Robbery incidents show a decreasing trend nationwide."
    },
    // Добавьте другие категории по аналогии...
  ]
};