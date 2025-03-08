let qrText = document.getElementById("qrText");
let qrimg = document.getElementById("qrimg");

function generateqr() {
    let qrData = qrText.value.trim();
    if (qrData === "") {
        alert("Please enter a valid text to generate a QR code.");
        return;
    }
    else{
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrData);
}
}
