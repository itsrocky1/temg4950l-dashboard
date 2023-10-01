var chart = Highcharts.stockChart('container', {
    rangeSelector: {
        selected: 1
    },
    data: {
        csvURL: 'https://itsrocky1.github.io/temg4950l-dashboard/static/data.csv'
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
