import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  book: DS.belongsTo('book', { async: true })
});
