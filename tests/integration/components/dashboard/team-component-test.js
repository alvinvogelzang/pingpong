import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('dashboard/team-component', 'Integration | Component | dashboard/team component', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dashboard/team-component}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#dashboard/team-component}}
      template block text
    {{/dashboard/team-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
