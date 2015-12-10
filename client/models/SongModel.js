// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  //on function call, trigger appropriate event:
  play: function(){
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }

});
