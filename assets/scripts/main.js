// let element = document.querySelector("fa-star");

let alert = document.querySelectorALL(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
	close.addEventListener('click', function(ev){
		ev.preventDefault();
		content.classList.remove("animated");
		content.classList.remove("lightSpeedIn");
		content.classList.add("animated");
		content.classList.add("bounceIn");
		setTimeout(() => {
			location.href="/";
		},1000);
		
	});
})

