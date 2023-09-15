
/**
 * Web303 Assignment 1
 * Nidhi Patel
 */


$(document).ready(function() {
    // Get references to the input fields and the result span
    const $salaryInput = $("#yearly-salary");
    const $percentInput = $("#percent");
    const $amountSpan = $("#amount");

    // Function to update the amount whenever either input changes
    function updateAmount() {
        const salary = parseFloat($salaryInput.val());
        const percent = parseFloat($percentInput.val());

        if (!isNaN(salary) && !isNaN(percent)) {
            const techAmount = (salary * (percent / 100)).toFixed(2);
            $amountSpan.text(`$${techAmount}`);
        } else {
            $amountSpan.text("$0.00"); // Display $0.00 for invalid input
        }
    }

    // Add event listeners to both inputs using the "keyup" event
    $salaryInput.on("keyup", updateAmount);
    $percentInput.on("keyup", updateAmount);

    // Initial update
    updateAmount();
});
