// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'sleeping dinosarwen', 		// this is the TITLE place in the class
				'https://exemplore.com/cryptids/Mokele-Mbembe-and-Other-Dinosaurs-Still-Alive-in-Africa-Today',	// this is the LINK place in the class
				'ju po',			// this is the AUTHOR place in the class
				'http://www.lattimore.id.au/images/dinosaur-sleeping-blanket.jpg',	// this is the IMAGE place in the class
				'arwen was slumber in vomputer skills class' // this is the BODY place in the class
				),

			new Post(
				'Second Post: BeN anD FEde aRE One',
				'http://www.sacbadlands.com',
				'HoeTP',
				'FullSizeRender.jpg', // this is a local image in the same folder as the js script
				'Fede was cold and decided to bird up'
				),

			new Post(
				'byers-mriggs',
				'https://www.16personalities.com',
				'ju po',
				'typing.png',
				'i guess im just good at typing people \\(.")/'
				),

			new Post(
				'Butter Up!',
				'https://www.royal.uk/her-majesty-the-queen',
				'Kim Duttery',
				'butter londutter.png',
				'cos whats better than gutters or shutters or flutters or tut-tutters or butter londutters'
				),

			new Post(
				'arngrey derg',
				'https://www.youtube.com/watch?v=e4Hf7Cda4rM',
				'duchess the dachshund',
				'arngryderg.PNG',
				'derg was merd >:('
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



