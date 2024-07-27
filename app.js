document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("signup-form");
	const inputs = form.querySelectorAll("input");

	inputs.forEach((input) => {
		input.addEventListener("input", function () {
			validateInput(this);
		});

		input.addEventListener("blur", function () {
			validateInput(this);
		});
	});

	form.addEventListener("submit", function (e) {
		e.preventDefault();
		if (validateForm()) {
			alert("Form submitted successfully!");
			// Here you would typically send the form data to your server
		}
	});

	function validateInput(input) {
		if (input.validity.valid) {
			input.style.borderColor = "#28a745";
		} else {
			input.style.borderColor = "#dc3545";
		}

		if (input.id === "confirm-password") {
			const password = document.getElementById("password");
			if (input.value !== password.value) {
				input.setCustomValidity("Passwords do not match");
			} else {
				input.setCustomValidity("");
			}
		}
	}

	function validateForm() {
		let isValid = true;
		inputs.forEach((input) => {
			if (!input.validity.valid) {
				isValid = false;
				input.style.borderColor = "#dc3545";
			}
		});
		return isValid;
	}
});
