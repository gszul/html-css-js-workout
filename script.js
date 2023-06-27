const box = document.querySelector(".box");

const colors = ["#003366", "#336699", "#6699cc", "#99ccff"];

const changeBorderColor = function () {
	const colorIndex = Math.floor(Math.random() * 4);
	box.style.borderColor = colors[colorIndex];
};

changeBorderColor();
