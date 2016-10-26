import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(book) {
      var params = {
        bookTitle: this.get('bookTitle'),
        author: this.get('author'),
        rating: this.get('rating'),
        image: this.get('image'),
        buyLink: this.get('buyLink'),
        postTitle: this.get('postTitle'),
        postAuthor: this.get('postAuthor'),
        postDate: this.get('postDate'),
        post: this.get('post')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', book, params);
    }
  }
});
