document.addEventListener('DOMContentLoaded', function() {
    // Add tooltip functionality
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('mouseover', function() {
            const tooltipText = tooltip.getAttribute('data-tooltip');
            const tooltipElement = document.createElement('div');
            tooltipElement.classList.add('custom-tooltip');
            tooltipElement.textContent = tooltipText;
            tooltip.appendChild(tooltipElement);
        });

        tooltip.addEventListener('mouseout', function() {
            const tooltipElement = tooltip.querySelector('.custom-tooltip');
            tooltip.removeChild(tooltipElement);
        });
    });

    // Add form submission functionality
    document.getElementById('taxForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const grossIncome = parseFloat(document.getElementById('grossIncome').value);
        const extraIncome = parseFloat(document.getElementById('extraIncome').value);
        const age = document.getElementById('age').value;
        const deductions = parseFloat(document.getElementById('deductions').value);

        // Reset error messages
        document.querySelectorAll('.error-icon').forEach(function(errorIcon) {
            errorIcon.style.display = 'none';
        });

        // Validate input
        let valid = true;

        if (isNaN(grossIncome)) {
            document.getElementById('grossIncomeError').style.display = 'inline-block';
            valid = false;
        }

        if (isNaN(extraIncome)) {
            document.getElementById('extraIncomeError').style.display = 'inline-block';
            valid = false;
        }

        if (!age) {
            document.getElementById('ageError').style.display = 'inline-block';
            valid = false;
        }

        if (isNaN(deductions)) {
            document.getElementById('deductionsError').style.display = 'inline-block';
            valid = false;
        }

        // Perform tax calculation and display result if input is valid
        if (valid) {
            let tax = 0;
            const totalIncome = grossIncome + extraIncome - deductions;
            if (totalIncome > 8) {
                const taxableIncome = totalIncome - 8;
                if (age === '<40') {
                    tax = 0.3 * taxableIncome;
                } else if (age === '>=40&<60') {
                    tax = 0.4 * taxableIncome;
                } else if (age === '>=60') {
                    tax = 0.1 * taxableIncome;
                }
            }

            const result = totalIncome - tax;
            document.getElementById('result').innerText = `Your overall income after tax deduction will be: ${result} Lakhs`;
            document.getElementById('resultModal').style.display = 'block';
        }
    });

    // Close modal on close button click
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('resultModal').style.display = 'none';
    });

    // Close modal on outside click
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('resultModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
