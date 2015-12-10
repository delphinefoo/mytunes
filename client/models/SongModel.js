// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    //appView.songQueueView must:
    //  - create or associate a SongQueueEntryView
    //  - render it

    //app.songQueue must:
    //  - decide whether or not play
    //
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
    console.log('dequeue!');
  },

  ended: function() {
    this.trigger('ended', this);
    console.log('ended!');
  }

});
