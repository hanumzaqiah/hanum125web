function penjumlahan() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var hasilSebelumnya = parseFloat(document.getElementById("hasil").textContent);
    
    if (isNaN(hasilSebelumnya)) {
        hasilSebelumnya = 0;
    }

    if (!isNaN(num1) && !isNaN(num2)) {
        var hasil = hasilSebelumnya + num1 + num2;
        document.getElementById("hasil").textContent = hasil;
    } else {
        alert("Masukkan bilangan yang valid!");
    }
}

function reset() {
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("hasil").textContent = 0;
}
