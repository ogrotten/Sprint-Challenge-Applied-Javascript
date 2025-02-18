/* If You've gotten this far, you're on your own! Although we will give you some hints:
	1. You will need to write a function that creates the carousel component, you will find the HTML below.
	2. You will need to grab a reference to all of the images
	3. Create a current index
	4. Those buttons are gonna need some click handlers.
	5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
	6. Have fun!
*/

/* HTML:
  <div class="carousel">
	<div class="left-button"> < </div>
	<img src="./assets/carousel/mountains.jpeg" />
	<img src="./assets/carousel/computer.jpeg" />
	<img src="./assets/carousel/trees.jpeg" />
	<img src="./assets/carousel/turntable.jpeg" />
	<div class="right-button"> > </div>
  </div>
*/


const container = document.querySelector(".carousel-container")
const carouselOpen = 
`<div class="carousel">
	<div class="left-button"> < </div>`

const carouselClose = 
`	<div class="right-button"> > </div>
</div>`


const images = [
	'./assets/carousel/mountains.jpeg',
	'./assets/carousel/computer.jpeg',
	'./assets/carousel/trees.jpeg',
	'./assets/carousel/turntable.jpeg',
]

for (let i = 0; i < images.length; i++) {
	const e = images[i];
	let show = DCE("img");
	show.src=e;
	clg(show);
	setTimeout(() => {
		container.append(carouselOpen, show, carouselClose)
		// images[images.length-1] ? i = 0 : null;
	}, 2000)
}

clg(container);