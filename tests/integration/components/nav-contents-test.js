import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-contents', 'Integration | Component | nav contents', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nav-contents}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nav-contents}}
      template block text
    {{/nav-contents}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
