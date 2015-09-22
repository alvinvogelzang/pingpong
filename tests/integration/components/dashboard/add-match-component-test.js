import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('dashboard/add-match-component', 'Integration | Component | dashboard/add match component', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dashboard/add-match-component}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#dashboard/add-match-component}}
      template block text
    {{/dashboard/add-match-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
