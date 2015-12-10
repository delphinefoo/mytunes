// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
    this.model.on('ended', function() {
      this.remove();
    }, this);

    this.model.on('dequeue', function() {
      this.remove();
    }, this);
  },

  events: {
    'click': function() {
      this.model.dequeue();
    }
    // 'ended': function() {
    //   console.log(this + ' triggers!')
    //   this.remove();
    // }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
