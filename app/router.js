import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

//note: set the path with the same name by default, specify if you want a diff name
Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('favourites', { path: '/favs' });
  this.route('characters');
});

export default Router;
