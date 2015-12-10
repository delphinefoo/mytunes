// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({


  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('remove', function(song, collection, obj) {
      if (obj.index === 0 && this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.remove(this.at(0));
    }, this);

    this.on('dequeue', function(song) {
      var index = this.indexOf(song);
      console.log(song);
      this.remove(song);
      //if removed the first song, call playFirst again
      if (index === 0 && this.length) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    this.at(0).play();
  },

  events: {
    // 'add': function() {
    //   if (this.length === 1) {
    //     this.playFirst();
    //   }
  }

});