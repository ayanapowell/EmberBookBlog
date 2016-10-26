import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('book');
  },
  actions: {
    update(book, params) {
      this.sendAction('update', book, params);
    }
  }
});
