const scrollToCourse = () => {
	window.scrollTo({
		top: 800,
		behavior: "smooth",
	});
}

const scrollToTable = () => {
	window.scrollTo({
		top: 1500,
		behavior: "smooth",
	});
}

const scrollToMentors = () => {
	window.scrollTo({
		top: 5000,
		behavior: "smooth",
	});
}

const scrollToBottom = () => {
	window.scrollTo({
		top: 9999,
		behavior: "smooth",
	});
}



document.getElementById('course-btn').onclick = scrollToCourse;
document.getElementById('table-btn').onclick = scrollToTable;
document.getElementById('mentors-btn').onclick = scrollToMentors;
document.getElementById('links-btn').onclick = scrollToBottom;
document.getElementById('contacts-btn').onclick = scrollToBottom;