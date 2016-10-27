import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    $('.navContents').transition('slide right');
  }
});
