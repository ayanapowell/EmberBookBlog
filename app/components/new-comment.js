import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      $('#review-form').hide();
      var params = {
        user: this.get('user'),
        date: this.get('date'),
        content: this.get('content'),
        book: this.get('book')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
