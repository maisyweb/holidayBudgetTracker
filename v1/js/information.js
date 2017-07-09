/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('information', [])

.service('Information', [function(){
    
    var information_list = [
        {
	key: 'cabanaBay',
	name: 'Cabana Bay Beach Resort',
	summary: "Universal's on site 50's styled hotel ",
	description: "Enjoy this retro-themed beach resort at Universal Orlando Resort™ with family friendly facilities such as a water slide and lazy river, bowling alley, plus enjoy Early Park Admission† to The Wizarding World of Harry Potter™ and Universal’s Volcano Bay™ one hour before the park opens (paid theme park admission required).\n\nThis Prime Value hotel offers you the excitement of Universal Orlando Resort™, with a throwback to the beach resorts of the 1950's and '60's, Universal’s Cabana Bay Beach Resort perfectly accommodates groups, with family suites for up to six people that include a kitchenette or standard rooms for up to four guests.",
	imageURL: 'https://s3-media4.fl.yelpcdn.com/bphoto/BOM49fnQBq4Ke-O7p3j2RA/ls.jpg',
	keywords: 'hotel universal cabana',
	latitude: '',
	longitude: '',
	website: 'http://www.themeparx.com/embedded/1495777575_18646286_427564874283832_53738849850884096_n.jpg'
},
{
	key: 'volcanoBay',
	name: 'Volcano Bay',
	summary: "Universal's Volcano Bay Water Theme Park",
	description: "Water is Life. Life is Joy. That's the philosophy celebrated at Universal's Volcano Bay™ water theme park. It's the carefree attitude the fabled Waturi islanders have embraced on their Pacific isle for centuries. Now you can live the Waturi way at this all-new park where thrills and relaxation flow in perfect harmony. \n\nWith the power of the TapuTapu™ wearable, there’s no standing in long lines, carrying rafts around the park, nothing between you and a full day of fun. It’s an all-new kind of paradise, just steps away from everything Universal Orlando Resort™ has to offer. ",
	imageURL: 'http://www.themeparx.com/embedded/1495777575_18646286_427564874283832_53738849850884096_n.jpg',
	keywords: 'water universal volcano',
	latitude: '',
	longitude: '',
	website: 'https://www.universalorlando.com/web/en/us/theme-parks/volcano-bay/index.html'
}
      ];
      
      var information_keys = {};

      for (var i=0;i<information_list.length;i++){
        information_keys[information_list[i].key] = information_list[i];
      }

    return {
        list: information_list,
        keys: information_keys
    }

}]);