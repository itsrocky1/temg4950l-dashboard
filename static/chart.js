var chart = Highcharts.stockChart('container', {
    rangeSelector: {
        selected: 1
    },
    data: {
        csvURL: window.origin + '/static/data.csv'
    },
    tooltip: {
        valueDecimals: 2
    },
    plotOptions: {
        series: {
            showInLegend: true,
            visible: true // Set default visibility of series
        }
    },
    legend: {
        enabled: true
    }
});
