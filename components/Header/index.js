// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
	const outer = DCE("div");
    outer.classList = "header";
    
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
