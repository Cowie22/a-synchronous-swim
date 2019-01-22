
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  console.log(event)
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

$('.move-button').on('click', function() {
  SwimTeam.move('up'.toLowerCase());
})

console.log('Client is running in the browser!');
