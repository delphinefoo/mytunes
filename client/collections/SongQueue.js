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

      'ended': function() {
        this.playNext();
      },

      //when a song is dequeued, play next if it was first, otherwise just remove it
      'dequeue': function(song) {
        if (this.at(0) === song) {
          this.playNext();
        } else {
          this.remove(song);
        }
      }
    }, this);
  },

  //remove the first song, if there is another, play it, otherwise stop
  playNext: function() {
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    } else {
      this.trigger('stop', this);
    }
  },

  //play the first song
  playFirst: function() {
    this.first().play();
  }

});