import DS from 'ember-data';

export default DS.Model.extend({
  bookTitle: DS.attr(),
  bookAuthor: DS.attr(),
  rating: DS.attr(),
  image: DS.attr(),
  buyLink: DS.attr(),
  postTitle: DS.attr(),
  postAuthor: DS.attr(),
  postDate: DS.attr(),
  post: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
