Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('userList');
Router.route('contact');
Router.route('movie');
Router.route('tvshows');
Router.route('about');
Router.route('anime');
Router.route('upload');
Router.route('search');
Router.route('dplayer');
Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
   c.ename = c.ename.toLowerCase()
	 return c;
 }});


Router.route('titan');
Router.route('backstreetgirl');
Router.route('others');
Router.route('hanebado')
Router.route('sponsors')
Router.route('cellsatwork')
Router.route('music')
Router.route('free')
Router.route('graphics')

Router.route('fbprofile')
Router.route('fbusers')
Router.route('fbtimeline')

Router.route('game');
Router.route('favorite');
Router.route('history');
Router.route('uploaded');
