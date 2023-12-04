let headerBtns = document.getElementsByClassName("btnHeader");
let btnContents = document.getElementsByClassName("btnContent");
let footerBtns = document.getElementsByClassName("btnFooter");

for (let index = 0; index < headerBtns.length; index++) {
	headerBtns[index].addEventListener("click", function () {
		useButton(index);
	});
	footerBtns[index].addEventListener("click", function () {
		useButton(index);
	});
}

function useButton(n) {
	if (btnContents[n].style.display == "grid") {
		btnContents[n].style.display = "none";
		footerBtns[n].style.display = "none";
		headerBtns[n].getElementsByClassName("material-symbols-outlined")[0].innerHTML =
			"expand_more";
	} else {
		btnContents[n].style.display = "grid";
		footerBtns[n].style.display = "grid";
		headerBtns[n].getElementsByClassName("material-symbols-outlined")[0].innerHTML =
			"expand_less";
	}
}
