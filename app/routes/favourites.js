import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      obj:{
        name: 'Thor',
        weapon: 'hammer'
      },
      array:[
        {
          Title: 'Rogue',
          Body: 'Mutant'
        },
        {
          Title: 'Gambit',
          Body: 'Mutant'
        }
      ]
    };
  }
});
