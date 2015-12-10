// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on({
      //play first song if adding to an empty queue
      'add': function() {
        if (this.length === 1) {
          this.playFirst();
        }
      },

      //if first song was removed, play new first song
      'remove': function(song, collection, obj) {
        if (obj.index === 0 && this.length > 0) {
          this.playFirst();
        }
      },

      //when a song ends, remove it from queue
      'ended': function() {
        this.remove(this.first());
      },

      //when a song is dequeued, remove it
      'dequeue': function(song) {
        this.remove(song);
      }
    }, this);
  },

  //play the first song
  playFirst: function() {
    this.first().play();
  }

  //TO DO: ask why this doesn't work
  /*events: {
    'add': function() {
      if (this.length === 1) {
        this.playFirst();
      }
  }*/

});