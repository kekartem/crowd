google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
function drawChart1(){

var data = new google.visualization.DataTable();
data.addColumn('string', 'Topping');
data.addColumn('number', 'Slices');
data.addRows([
['Key on', 10],

['Guren lagan', 90],

]);

var chartheight = $('#ch1').height();
var options = {'backgroundColor':'transparent',
                 'titleTextStyle':{color: 'white'},
                 'legend':{textStyle:{color:'white', fontSize:15}, position: 'right', alignment:'center'},
                 height:chartheight,
                 width:chartheight,
                 chartArea:{width:chartheight, height:chartheight}};      // Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.PieChart(document.getElementById('chart1'));
chart.draw(data, options);
}

function drawChart2(){

var data = new google.visualization.DataTable();
data.addColumn('string', 'Topping');
data.addColumn('number', 'Slices');
data.addRows([
['Simon', 25],

['Guren lagan', 90],

]);

var chartheight = $('#ch1').height();
var options = {'backgroundColor':'transparent',
                 'titleTextStyle':{color: 'white'},
                 'legend':{textStyle:{color:'white', fontSize:15}, position: 'right', alignment:'center'},
                 height:chartheight,
                 width:chartheight,
                 chartArea:{width:chartheight, height:chartheight}};      // Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.PieChart(document.getElementById('chart2'));
chart.draw(data, options);
}

function drawChart3() {
var data = google.visualization.arrayToDataTable([
  ["Element", "Density", { role: "style" } ],
  ['Зарегестрировано', 80, '#b87333'],
  ['Пожертвовали', 50, '#b87333'],
]);

var view = new google.visualization.DataView(data);
view.setColumns([0, 1,
                 { calc: "stringify",
                   sourceColumn: 1,
                   type: "string",
                   role: "annotation" },
                 2]);

var chartheight = $('#ch1').height();      var options = {
  'backgroundColor':'transparent',
                 'titleTextStyle':{color: 'white'},
                 'legend':{textStyle:{color:'white'}},
                 height:chartheight,
                 width:chartheight,
                 chartArea:{width:chartheight/1.5, height:chartheight/1.5}      };
var chart = new google.visualization.ColumnChart(document.getElementById("chart3"));
chart.draw(view, options);
}function drawChart4() {
var data = google.visualization.arrayToDataTable([
  ["Element", "Density", { role: "style" } ],
  ['Simon', 25, '#b87333'],
  ['Guren lagan', 90, '#b87333'],
]);

var view = new google.visualization.DataView(data);
view.setColumns([0, 1,
                 { calc: "stringify",
                   sourceColumn: 1,
                   type: "string",
                   role: "annotation" },
                 2]);

var chartheight = $('#ch1').height();      var options = {
  'backgroundColor':'transparent',
                 'titleTextStyle':{color: 'white'},
                 'legend':{textStyle:{color:'white'}},
                 height:chartheight,
                 width:chartheight,
                 chartArea:{width:chartheight/1.5, height:chartheight/1.5}      };
var chart = new google.visualization.ColumnChart(document.getElementById("chart4"));
chart.draw(view, options);
}
