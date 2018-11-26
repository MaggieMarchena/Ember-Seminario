import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  ajax: service(),

  model(params, transition){
    let requestUrl = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' + transition.queryParams['term'] + '&apikey=86fe8435ce587eb4dfd8d0a62f2abe1f';
    return this.get('ajax').request(requestUrl);

    // return {
    //   array:[
    //     {
    //       Title: 'Rogue',
    //       Body: 'Mutant',
    //       Img: 'images/Rogue.png'
    //     },
    //     {
    //       Title: 'Gambit',
    //       Body: 'Mutant',
    //       Img: 'images/Gambit.png'
    //     }
    //   ]
    // };
  }

});
