import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('dashboard/matches-component', 'Integration | Component | dashboard/matches component', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dashboard/matches-component}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#dashboard/matches-component}}
      template block text
    {{/dashboard/matches-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
