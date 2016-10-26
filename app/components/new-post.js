import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      alert("hi");
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
        post: this.get('post')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost',params);
    }
  }
});
