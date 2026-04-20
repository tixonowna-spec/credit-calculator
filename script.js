function calculate() {
    let amount = parseFloat(document.getElementById("amount").value);
    let months = parseFloat(document.getElementById("months").value);
    let rate = parseFloat(document.getElementById("rate").value);

    if (!amount || !months || !rate) {
        alert("Заповніть всі поля");
        return;
    }

    let monthlyRate = rate / 100 / 12;

    let payment = (amount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -months));

    let total = payment * months;

    document.getElementById("monthly").innerText =
        "Щомісячний платіж: " + payment.toFixed(2);

    document.getElementById("total").innerText =
        "Переплата: " + (total - amount).toFixed(2);
}
