document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let address = document.getElementById('address').value.trim();

    if (name === "" || email === "" || address === "") {
        alert("Semua data harus diisi.");
    } else {
        alert("Pendaftaran berhasil!");
        // Optionally, here you can add the form submission logic.
    }
});