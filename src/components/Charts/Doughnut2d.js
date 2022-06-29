import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Pie3D = ({data}) =>{

  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Starts per languages",
        "decimals": 0,
        "doughnutRadius": "55%",
        "showPercentValues": 0,
        "theme": "candy"
      },
      "data": data
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default Pie3D