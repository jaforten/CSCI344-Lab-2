
var main = function () {
    console.log("Twitter Feed");
  
    var twitter = new ctwitter.CTwitter();
    twitter.stream("statuses/filter", { lang:"en", track:["Microsoft", "Kinect"] }, function (stream) {
        stream.on("data", function (tweet) {
              $('<p class="tweet"><img src="'+tweet.profile_image_url+'" />'+tweet.text+'</p>')
		          .hide()
		          .prependTo('#tweets')
		          .slideDown(1000);
               
		$('#tweets p:gt(0)')
		    .fadeOut(700, function() { $(this).remove() });
             
        });
    });
}


$(document).ready(main);
