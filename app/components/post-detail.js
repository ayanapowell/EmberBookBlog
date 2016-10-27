import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('comment');
  },
  actions: {
    commentFormShow() {
      this.sendAction('commentFormShow');
    }
  }
});
