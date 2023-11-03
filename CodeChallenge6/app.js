document.getElementById('sdestruct').onclick = function() {selfDestruct()}

function selfDestruct() {
    document.body.style.backgroundColor = 'red';
    document.getElementById('message').innerHTML = 'Self destruct initiated... What have you done?';
}