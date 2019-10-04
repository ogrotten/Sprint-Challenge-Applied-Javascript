// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard() {
	const outer = DCE("div");
    outer.classList = "card";
    outer.textContent
    
	const date = DCE("span");
	date.classList = "date";
    date.textContent = "SMARCH 28, 2019"
    
	const title = DCE("h1");
    title.textContent = "Lambda Times"
    
	const degrees = DCE("span");
	degrees.classList = "temp";
    degrees.textContent = "98°"
    
    outer.append(date, title, degrees)
    return outer;
}
document.querySelector(".header-container").append(Header())
