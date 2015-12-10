// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();

    this.collection.on('add', function(song){
      this.$el.append(new SongQueueEntryView({model: song}).render());
    }, this);

  },

  render: function() {
    return this.$el.html('<th>Queue</th>');
  },

  tagName: 'table'

});
