-+document.addEventListener("DOMContentLoaded", function () {
    const paymentMethodSelect = document.getElementById("payment-method");
    const creditCardDetails = document.querySelector(".credit-card-details");
    const boletoDetails = document.querySelector(".boleto-details");
    const pixDetails = document.querySelector(".pix-details");
    const pixKey = document.getElementById("pix-key");
    const submitPaymentButton = document.getElementById("submit-payment");
    const paymentStatus = document.querySelector(".payment-status");

    paymentMethodSelect.addEventListener("change", function () {
        const selectedPaymentMethod = paymentMethodSelect.value;

        if (selectedPaymentMethod === "credit-card") {
            creditCardDetails.style.display = "block";
            boletoDetails.style.display = "none";
            pixDetails.style.display = "none";
        } else if (selectedPaymentMethod === "boleto") {
            creditCardDetails.style.display = "none";
            boletoDetails.style.display = "block";
            pixDetails.style.display = "none";
        } else if (selectedPaymentMethod === "pix") {
            creditCardDetails.style.display = "none";
            boletoDetails.style.display = "none";
            pixDetails.style.display = "block";
            // Simule a geração de uma chave PIX (substitua com sua lógica real)
            pixKey.textContent = "1234 5678 9012 3456";
        }
    });

    submitPaymentButton.addEventListener("click", function () {
        const selectedPaymentMethod = paymentMethodSelect.value;
        const amount = document.getElementById("amount").value;

        // Lógica de pagamento (simulada)
        if (selectedPaymentMethod === "credit-card") {
            // Processar pagamento com cartão de crédito
            // Substitua com sua integração de pagamento real
        } else if (selectedPaymentMethod === "boleto") {
            // Gerar boleto bancário
            // Substitua com sua integração de pagamento real
        } else if (selectedPaymentMethod === "pix") {
            // Iniciar pagamento via PIX
            // Substitua com sua integração de pagamento real
        }

        // Exibir mensagem de confirmação
        paymentStatus.style.display = "block";
    });
});
