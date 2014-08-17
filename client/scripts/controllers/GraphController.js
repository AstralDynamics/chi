module.exports = function($scope) {
  $scope.data = [
    {
      x: 0,
      val_0: 32
    },
    {
      x: 1,
      val_0: 26
    },
    {
      x: 2,
      val_0: 29
    },
    {
      x: 3,
      val_0: 30
    },
    {
      x: 4,
      val_0: 35
    },
    {
      x: 5,
      val_0: 31
    },
    {
      x: 6,
      val_0: 27
    }
  ];

  $scope.options = {
    axes: {
      x: {type: "linear"},
      y: {type: "linear", max: 90, min: 0}
    },
    series: [
      {
        y: "val_0",
        label: "A time series",
        color: "#9467bd",
        axis: "y",
        type: "line",
        thickness: "2px",
        id: "series_0",
        drawDots: true
      }
    ],
    tooltip: {mode: "scrubber"},
    stacks: [],
    lineMode: "linear",
    tension: 0.7,
    drawLegend: false,
    drawDots: true,
    columnsHGap: 20
  };
};
