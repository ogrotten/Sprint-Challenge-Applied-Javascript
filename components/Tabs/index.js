// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//#region Convenience Functions

function clg(...x) {
	for (let exes of x) console.log(exes);
}
const DCE = x => document.createElement(x);

//#endregion Convenience Functions

function showTabs(data) {
	let alltabs = [];

	data.forEach(e => {
		let ret = DCE("div");
		ret.classList = "tab";
		ret.textContent = e;
		// clg(ret);
		document.querySelector(".topics").append(ret);
	});
}

axios
	.get("https://lambda-times-backend.herokuapp.com/topics")
	.then(res => {
		data = res.data;
		// clg(data.topics);
		showTabs(data.topics);
	})
	.catch(res => {
		clg("problem with tabs.");
	});
