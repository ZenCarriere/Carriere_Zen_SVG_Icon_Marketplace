// this is an IIFE (immediate invoked function expression)
// also called the module pattern
//
(() => {//shorthand function declaration
	console.log('ConnectionTest_Success');

	//select elements here
	let DSVG = document.querySelector(".DSVG");
	let ASVG = document.querySelector(".ASVG");
	let ZSVG = document.querySelector(".ZSVG");
	let WSVG = document.querySelector(".WSVG");
	let CSVG = document.querySelector(".CSVG");
	let TSVG = document.querySelector(".TSVG");
	let QSVG = document.querySelector(".QSVG");
	let XSVG = document.querySelector(".XSVG");
	let SSVG = document.querySelector(".SSVG");
	let USVG = document.querySelector(".USVG");

	//functions go here
	function logID() {
		console.log("Selected the ", this.id, " SVG icon");
	}

	//event handling goes here
	DSVG.addEventListener("click", logID);
	ASVG.addEventListener("click", logID);
	ZSVG.addEventListener("click", logID);
	WSVG.addEventListener("click", logID);
	CSVG.addEventListener("click", logID);
	TSVG.addEventListener("click", logID);
	QSVG.addEventListener("click", logID);
	XSVG.addEventListener("click", logID);
	SSVG.addEventListener("click", logID);
	USVG.addEventListener("click", logID);


})();