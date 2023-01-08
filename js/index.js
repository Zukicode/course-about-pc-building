//pop up for login

//Show and Hide password logic
const showPassword = () => {
	let inp = document.querySelector("#password");

	if (inp.getAttribute("type") === "password") {
		inp.setAttribute("type", "text");
		document.querySelector(".active-show-pass").style.display = "block";
		document.querySelector(".show-pass").style.display = "none";
	} else {
		inp.setAttribute("type", "password");
		document.querySelector(".show-pass").style.display = "block";
		document.querySelector(".active-show-pass").style.display = "none";
	}
}

document.querySelector(".show-pass-div").addEventListener("click", showPassword);

//Function to show or remove pop up
const showPopUpLogin = () => {
	document.querySelector(".pop-up-login").classList.add('activeLogin');
}

const removePopUpLogin = () => {
	document.querySelector(".pop-up-login").classList.remove('activeLogin');
}

//Add handler to add pop up login
document.querySelector("#enter-course").addEventListener("click", showPopUpLogin);

//Add handler to remove pop up login
document.querySelector("#close-pop-up-login").addEventListener("click", removePopUpLogin)

//pop up for buy course
const showPopBuyCourse = () => {
	document.querySelector(".pop-up-buy-course").classList.add('activeCourse');
}

const removePopBuyCourse = () => {
	document.querySelector(".pop-up-buy-course").classList.remove('activeCourse');
}

//Add handler to add pop buy course
document.querySelector("#buy-course").addEventListener("click", showPopBuyCourse);

//Add handler to remove pop buy course
document.querySelector("#close-pop-buy-course").addEventListener("click", removePopBuyCourse)