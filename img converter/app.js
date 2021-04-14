

function mainLogic() {
    const checkedFormat = document.querySelector('input[name="format"]:checked').value;
    const checkedQuality = document.querySelector('input[name="quality"]:checked').value;
    let file = document.querySelector('#file-input').files[0];
    if (!file) {
        if (!tempFile) {
            if (window.matchMedia("(max-width: 768px)").matches)
                alert(`Must add the image file first!`);
            else
                showAlert(`Must add the image file first!`, 'alert-danger');
        }
        if (tempFile)
            file = tempFile;
    }

    let pdf = new jsPDF('landscape', 'mm', 'a4');
    pdf.addImage(file, 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
    pdf.save('certificate.pdf');





    imageConversion.compress(file, checkedQuality).then(res => {
        res = res.slice(0, res.size, checkedFormat);
        imageConversion.downloadFile(res, `soln`);
    });
}

