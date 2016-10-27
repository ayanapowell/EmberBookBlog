import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost() {
      var params = {
        bookTitle: this.get('bookTitle'),
        author: this.get('author'),
        rating: this.get('rating'),
        image: this.get('image'),
        buyLink: this.get('buyLink'),
        postTitle: this.get('postTitle'),
        postAuthor: this.get('postAuthor'),
        postDate: this.get('postDate'),
        post: this.get('comment')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost',params);
    }
  }
});
