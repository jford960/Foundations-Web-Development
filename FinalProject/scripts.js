let headerBtns = document.getElementsByClassName('btnHeader');
let btnContents = document.getElementsByClassName('btnContent');
let footerBtns = document.getElementsByClassName('btnFooter')

for (let index = 0; index < headerBtns.length; index++) {
    headerBtns[index].addEventListener('click', function(){useButton(index)});
    footerBtns[index].addEventListener('click', function(){useButton(index)});
}

function useButton(n) {
    if (btnContents[n].style.display !== 'none') {
        btnContents[n].style.display = 'none'
    }
    else {
        btnContents[n].style.display = 'block'
    }
}