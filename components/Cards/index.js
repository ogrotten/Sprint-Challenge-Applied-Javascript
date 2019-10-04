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

function createCard(data) {

	const outer = DCE("div");
    outer.classList = "card";
    
	const headline = DCE("div");
        headline.classList = "headline";
        headline.textContent = data.headline
    
    const author = DCE("div");
        author.classList = "author";
        const avcontainer = DCE("div");
            avcontainer.classList = "img-container";
            const avatar = DCE("img");
            avatar.src = data.authorPhoto;
        const byline = DCE("span");
        byline.textContent = data.authorName;

    avcontainer.append(avatar);
    author.append(avcontainer, byline);
    
    outer.append(headline, author);
    document.querySelector(".cards-container").append(outer);
}

// clg(createCard())


axios
	.get("https://lambda-times-backend.herokuapp.com/articles")
	.then(res => {
        data = res.data;
        Object.values(data.articles).forEach(e => {
            e.forEach(f => {
                createCard(f);
            });
        });
	})
	.catch(err => {
		clg(`problem with cards: ${err}`);
	});
