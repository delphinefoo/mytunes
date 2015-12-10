// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
    // TODO: find why this doesn't work
    // 'ended': function() {
    //   console.log(this + ' triggers!')
    //   this.remove();
    // }
  },

  initialize: function() {
    this.model.on({
      'ended': function() {
        this.remove();
      },
      'dequeue': function() {
        this.remove();
      }
    }, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
