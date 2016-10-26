import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
  },
  actions: {
    update(book, params) {
      Object.keys(params).forEach(function(key) {
        console.log("here");
        if(params[key]!== undefined) {
          book.set(key, params[key]);
        }
      });
      book.save();
      this.transitionTo('admin');
    },
    savePost(params) {
      alert("hi!");
      var newPost = this.store.createRecord('book', params);
      newPost.save();
      this.transitionTo('admin');
    },
    destroyPost(book) {
      book.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
