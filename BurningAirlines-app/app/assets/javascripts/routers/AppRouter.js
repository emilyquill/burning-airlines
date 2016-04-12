var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '' : 'index'
  },
  index:function() {
    console.log('Main page has loaded');
    var appView = new app.AppView();
    appView.render();
  }
});
