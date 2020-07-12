clear = document.querySelector(".all");
let div = document.querySelector("div");
let input = document.querySelector("#userinput");
let ul = document.querySelector("#list");
let form = document.querySelector("#form");


function addNode(){
	if(input.value.length > 0) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		form.reset();
	}
}

ul.addEventListener("click", function(event){
event.target.classList.toggle("toggle-item")
	
})




form.addEventListener("submit",function(event){
	event.preventDefault();
		addNode();	
})
function delete_all(){
document.querySelector(".all").reset();
}
clear.addEventListener("click", delete_all)