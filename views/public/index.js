const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const email = document.querySelector("#email");
const main = document.querySelector("#main");
const mainContainer = document.querySelector("#main-container");

// submit event listener for form
function signupNotification(event) {
	event.preventDefault();

	const userName = firstName.value;
	const userEmail = email.value;

	let paragraph = document.createElement("p");

	paragraph.classList.add("form-pop-up");

	paragraph.innerHTML = `Hello <span class = 'pop-up-name'>${userName}</span>, thank you for signing up. A verification link has been sent to ${userEmail}`;
	mainContainer.style.display = "none";
	form.style.display = "none";
	form.submit();
	main.prepend(paragraph);
	
};

form.addEventListener("submit", signupNotification);