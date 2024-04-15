# Tax Calculator

## Overview

The Tax Calculator is a web application designed to calculate taxes based on the user's income, deductions, and age group. It provides a simple interface for users to input their financial details and view the calculated tax amount.

## Features

- Calculation of taxes based on income, deductions, and age group.
- Error handling for incorrect input values.
- Display of error icons and tooltips for input validation.
- Age group selection through dropdown menu.
- Modal display of final tax calculation result.

## Setup

To run the Tax Calculator locally, follow these steps:

1. Clone the repository:

2. Open the project directory in your code editor.

3. Open the `index.html` file in a web browser to view the application.

## Usage

1. Enter the gross annual income, extra income, deductions, and select the age group from the dropdown menu.
2. If any input field contains incorrect values (such as characters instead of numbers), error icons will appear next to the respective input fields. Hovering over the error icons will display tooltips with error messages.
3. If any mandatory field (such as age group) is left empty, an error icon will appear next to the respective dropdown menu. Hovering over the error icon will display a tooltip indicating that the input field is mandatory.
4. Click the "Submit" button to calculate the tax.
5. A modal will appear displaying the final tax calculation result based on the provided inputs.

## Assumptions

- The tax calculation formula is based on the provided requirements.
- Error icons are displayed using Bootstrap icons.
- The application uses HTML, CSS, and JavaScript with Bootstrap and jQuery libraries.
- Input validation is performed using JavaScript.
- The user interface is designed based on the provided design example but may be modified as needed.
- Edge cases such as empty fields and invalid input values are handled as per the requirements.

## License

This project is licensed under the [MIT License](LICENSE).
