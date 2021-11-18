function drawGraph(name,data,categories,container,title){
    Highcharts.chart(container, {

    title: {
      text: title,
    },
  
    yAxis: {
      title: {  
        text: 'Percentage %'

      }
    },
  
    xAxis: {
      categories: categories, 
    },

    series: [{
      name: name,
      data: data,
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });
}