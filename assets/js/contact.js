document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('contactForm');
	if (!form) return;

	const statusEl = form.querySelector('.form-status');
	const fields = {
		name: {
			input: form.elements.name,
			validate: (value) => value.trim().length >= 2,
			message: 'Please enter at least 2 characters.'
		},
		email: {
			input: form.elements.email,
			validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
			message: 'Enter a valid email (example@domain.com).'
		},
		message: {
			input: form.elements.message,
			validate: (value) => value.trim().length >= 10,
			message: 'Message should be at least 10 characters long.'
		}
	};

	const setFieldState = (fieldName, isValid) => {
		const { input, message } = fields[fieldName];
		const errorEl = form.querySelector(`[data-error-for="${fieldName}"]`);

		if (!errorEl) return true;

		if (isValid) {
			errorEl.textContent = '';
			input.classList.remove('is-invalid');
		} else {
			errorEl.textContent = message;
			input.classList.add('is-invalid');
		}

		return isValid;
	};

	const validateField = (fieldName) => {
		const { input, validate } = fields[fieldName];
		const value = input.value || '';
		const isValid = validate(value);
		return setFieldState(fieldName, isValid);
	};

	form.addEventListener('input', (event) => {
		const fieldName = event.target.name;
		if (fields[fieldName]) {
			validateField(fieldName);
		}
	});

form.addEventListener('submit', async (event) => {
	event.preventDefault();

	let formIsValid = true;
	Object.keys(fields).forEach((fieldName) => {
		const isValid = validateField(fieldName);
		if (!isValid) {
			formIsValid = false;
		}
	});

	if (!formIsValid) {
		if (statusEl) {
			statusEl.textContent = 'Please fix the highlighted fields.';
		}
		return;
	}

	if (statusEl) {
		statusEl.textContent = 'Sending...';
	}

	try {
		const formData = new FormData(form);
		const response = await fetch(form.action, {
			method: 'POST',
			body: formData,
			headers: {
				Accept: 'application/json'
			}
		});

		if (response.ok) {
			form.reset();
			Object.keys(fields).forEach((fieldName) => setFieldState(fieldName, true));
			if (statusEl) {
				statusEl.textContent = 'Message sent successfully!';
			}
		} else {
			throw new Error('Network response was not ok.');
		}
	} catch (error) {
		if (statusEl) {
			statusEl.textContent = 'Something went wrong. Please try again later.';
		}
		console.error(error);
	}
});
});

