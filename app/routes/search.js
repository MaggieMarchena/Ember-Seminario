import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    doSearch(searchTerm) {
      console.log("searchTerm: " + searchTerm);
    }
  }
});
