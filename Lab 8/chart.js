let myChart = document.getElementById('myChart').getContext('2d');


var chart = new Chart(myChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['BROOKLYN TECHNICAL HS', 'STUYVESANT HS', 'BRONX HS OF SCIENCE', 'STATEN ISLAND TECHNICAL HS', 'BENJAMIN N. CARDOZO HS', 'FIORELLO H. LAGUARDIA HS', 'MIDWOOD HS','TOWNSEND HARRIS HS', 'FRANCIS LEWIS HS','FOREST HILLS HS'],
        datasets: [{
            label: 'AP Test Takers',
            backgroundColor: 'red',
            borderColor: 'white',
            data: [2117, 1510, 1190,528,676,691,745,613,697,733]
        },
        {
            label: 'Total Exams Taken',
            backgroundColor: 'blue',
            borderColor: 'white',
            data: [3692,2819,2435,905,1145,1236,1223,796,1033,1116]
        },
        {
            label: 'Number of Exams with scores 3 4 or 5',
            backgroundColor: 'green',
            borderColor: 'white',
            data: [2687, 2648, 2189, 809, 796, 790, 758, 625, 583, 526]
        }
    ]
    },

    // Configuration options go here
    options: {
        scales:{
            yAxes:[{
                ticks:{
                  min:0,
                  max:4000
                }
              }],
              xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxTicksLimit: 10
                }
            }]  
    },    
    title:{
        display: true,
        text: '2010 AP College Board School Level Results by Jose Soto',
        fontSize:35
    },
    legend:{
        display:true,
        position:'right',
        labels:{
          fontColor: '#000'
        }
      },    
}
});