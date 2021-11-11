const colors = ["green", "red", "rgba(133, 122, 200)","#f15025"];
const btn= document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
	
	const randomNumber = Math.round(getRandomColor());
	
	console.log(Math.round(randomNumber));
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
	
	
})

function getRandomColor()
{
	
	return (Math.random()* colors.length);
}