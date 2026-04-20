function calculate() {
    let amount = document.getElementById("amount").value;
    let months = document.getElementById("months").value;
    let rate = document.getElementById("rate").value;

    let monthlyRate = rate / 100 / 12;

    let monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    let totalPayment = monthlyPayment * months;

    document.getElementById("monthly").innerText =
        "Щомісячний платіж: " + monthlyPayment.toFixed(2);

    document.getElementById("total").innerText =
        "Загальна переплата: " + (totalPayment - amount).toFixed(2);
}
