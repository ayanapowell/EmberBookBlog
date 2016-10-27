import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('book', params.post_id);
  },
  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var book = params.book;
      book.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return book.save();
      });
      this.transitionTo('post', book);
    },
    commentFormShow() {
      this.set('commentFormShow');
    }
  }
});
