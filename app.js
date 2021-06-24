const myInput = document.getElementById('myInput');
const copyText = document.getElementById('copyText');


copyText.addEventListener('click', () => {
    var copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    copyText.innerHTML = ("Copied the text: " + copyText.value);
})