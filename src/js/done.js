(function ($) {
  var cl = console.log.bind(console);
  var App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    rootElement: '#ember-container'
  });
  window.App = App;

  App.Store = DS.Store.extend({
    revision: 12
  });

  DS.RESTAdapter.reopen({
    namespace: 'rest'
  });

  //-------------------------
  // Models
  //-------------------------
  App.Todo = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    created: DS.attr('date'),
    modified: DS.attr('date')
  });

  //-------------------------
  // Views
  //-------------------------

  //-------------------------
  // Controllers
  //-------------------------

  //-------------------------
  // Router
  //-------------------------
  App.TodosRoute = Ember.Route.extend({
    model: function() {
      return App.Todo.find();
    }
  });

  App.Router.map(function() {
    this.resource("todos", {path: "/"});
  });

})(jQuery);
