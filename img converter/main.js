const downloadButton = document.querySelector(`#download-button`);
let tempSrc, tempFile;
//for alert
function showAlert(message, type) {
    const div = document.createElement('div');
    div.classList.add(`alert`, type);
    div.appendChild(document.createTextNode(message));
    div.style.width = `80%`;

    document.querySelector(`.pic`).insertBefore(div, document.querySelector(`.pic>input[type="button"]`));
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

//for Preview
document.querySelector('input[type="file"]').addEventListener('change', function () {
    if (this.files && this.files[0]) {
        showAlert(`Image Uploaded Successfully!`, 'alert-info');
        var img = document.querySelector('img');
        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        tempSrc = img.src;
        tempFile = document.querySelector('#file-input').files[0];
    }
});







downloadButton.addEventListener(`click`, () => {
    fetch(`./app.js`, { "Content-Type": "application/javascript" }).then(response => response.text()).then((res) => {

        const script = document.createElement('script');
        script.textContent = res;
        document.body.appendChild(script);
        script.async = false;
        mainLogic();
        script.remove();
        mainLogic = undefined;
        delete mainLogic;

    });

});