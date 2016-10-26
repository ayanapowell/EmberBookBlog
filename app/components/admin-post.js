import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('book');
  },
  actions: {
    update(book, params) {
      this.sendAction('update', book, params);
    },
    destroyPost(book) {
      if (confirm('Are you sure you want to delete this book?')) {
        $('.fa-trash').transition('pulse');
        this.sendAction('destroyPost', book);
      }
    }
  }
});
