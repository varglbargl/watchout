var gameSettings = {
  height: 600,
  width: 800,
  nEnemies: 45,
  padding: 20
}

// var score = {
//   currentScore: 0,
//   bestScore: 0
// }

// draw a gameboard with SVG
var board = d3.select('body').append('svg:svg').attr({width: gameSettings.width, height: gameSettings.height, class: "gameBoard"});

var grid = {
  // this code makes a grid on top of our gameBoard.
  x: d3.scale.linear().domain([0, 100]).range([0, gameSettings.width]),
  y: d3.scale.linear().domain([0, 100]).range([0, gameSettings.height])
}

var makeEnemies = function () {
  return _.range(0, gameSettings.nEnemies).map(function(i) {
    return {
      id: i,
      x: Math.random() * 800,
      y: Math.random() * 600
    }
  })
};

var enemies = makeEnemies();

board.selectAll('circle').data(enemies).enter().append('circle').attr('cx', function(i){ return i.x; }).attr('cy', function(i){ return i.y; }).attr('id', function(i){ return i.id; }).attr('r', 10).attr('fill', 'blue' );

// var Player = function(){

// };

// Player.prototype.path = "m161,112l-38,58l13.5,21l49.5,0l12,-25l-37,-54z"

// Player.prototype.fill="blue"

// var render = function(enemyData){
//   var enemies = d3.selectAll('circle.enemy').data(enemyData, function(d){ return d.id 
//   });
//   // attaching enemies data to circles
//   enemies.enter().append('svg:circle').attr('class', 'enemy').attr('cx', function(enemy){
//     return grid.x(enemy.x);
//   }).attr('cy', function(enemy){
//     return grid.y(enemy.y);
//   }).attr('r', 0);
// };

// var playGame = function (){
//   var gameTurn = function(){
//     var newEnemyPositions = makeEnemies();
//     return render(newEnemyPositions);
//   }
//   gameTurn();
// };

// playGame();