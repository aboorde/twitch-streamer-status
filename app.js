var channels = ["FreeCodeCamp", "Shortyyguy", "LIRIK", "Monstercat", "Valkrin", "imaqtpie", "comster404"];

var streamData;

function createStreamList() {
  channels.forEach(function(channel) {
    //create twitch URL from channel name
    var streamUrl = 'https://api.twitch.tv/kraken/streams/' + channel + '?callback=?';
    var streamData;
    //call twitch API to get stream data
    $.getJSON(streamUrl, function(data) {
      if(data.status == 422) {
        $('<li class="list-group-item list-group-item-danger">' + channel + ': Account does not exist' + '<span class="label label-danger label-pill pull-right">DNE</span>' + '</li>').appendTo("#streamList");
        console.log(channel + ": Account does not exist");
        console.log(data);
      }else if(data.stream == null) {
        $('<li class="list-group-item list-group-item-info">' + '<a href="https://www.twitch.tv/' + channel + '/">' + channel + '</a>' + '<span class="label label-primary label-pill pull-right">OFFLINE</span>' + '</li>').appendTo("#streamList");
        console.log(channel + ": offline");
        console.log(data);
      } else{
          $('<li class="list-group-item list-group-item-success">' + '<a href="https://www.twitch.tv/' + channel + '/">' + channel + '</a>' + ': ' + data.stream.game + '<span class="label label-success label-pill pull-right">ONLINE</span>' + '<br><span>' + data.stream.channel.status + '</span>' + '</li>').appendTo("#streamList");
          console.log(channel + ": " + data.stream.game);
          console.log(data);
        }
    });
    
    
    
  });
};
/* $.getJSON('https://api.twitch.tv/kraken/streams/Shortyyguy?callback=?', function(data) {
  
  streamData = data;
  console.log(streamData.stream);
});

console.log(streamData);
*/
$(document).ready(function() {
  createStreamList();
  console.log( "ready!" );
});