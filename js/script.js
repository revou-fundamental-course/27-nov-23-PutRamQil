// function headerKalkulator() {
//     document.getElementById
// }

function showLuasForm() {
    document.getElementById("luasForm").style.display = "block";
    document.getElementById("kelilingForm").style.display = "none";

    document.getElementById("headerLuas").style.display = "block";
    document.getElementById("headerKeliling").style.display = "none";

    document.getElementById("rumusLuas").style.display = "block";
    document.getElementById("rumusKeliling").style.display = "none";
}

function showKelilingForm() {
    document.getElementById("luasForm").style.display = "none";
    document.getElementById("kelilingForm").style.display = "block";

    document.getElementById("headerLuas").style.display = "none";
    document.getElementById("headerKeliling").style.display = "block";
    
    document.getElementById("rumusLuas").style.display = "none";
    document.getElementById("rumusKeliling").style.display = "block";
}

function hitungLuas() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    const luas = alas * tinggi / 2;

    displayResult(`Luas segitiga: ${luas}`);
}

function hitungKeliling() {
    const sisiA = parseFloat(document.getElementById("sisiA").value);
    const sisiB = parseFloat(document.getElementById("sisiB").value);
    const sisiC = parseFloat(document.getElementById("sisiC").value);

    const keliling = sisiA + sisiB + sisiC;

    displayResult(`Keliling segitiga: ${keliling}`);
}

function displayResult(result) {
    document.getElementById("resultContainer").innerText = result;
}

function resetForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        input.value = '';
    });

    document.getElementById('resultContainer').innerText = '';
}