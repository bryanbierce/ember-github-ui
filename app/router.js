import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orgs');
  this.route('org',{path: 'org/:id'}, function() {
    this.route('repos');
    this.route('repo', {path: 'repo/:repoid'}, function() {
      this.route('contributors');
      this.route('issues');
    });
  });
});

export default Router;
