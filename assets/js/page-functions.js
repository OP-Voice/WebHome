/**
 * Page-specific JavaScript functionality for index.html
 * Contains accordion, mobile menu, sticky header, and form functionality
 */

document.addEventListener("DOMContentLoaded", function () {
  // --- Static Page Functionality ---

  // Accordion functionality
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach((header, index) => {
    // Set initial ARIA attributes
    header.setAttribute("aria-expanded", "false");
    header.setAttribute("aria-controls", `accordion-content-${index + 1}`);

    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionContent =
        accordionItem.querySelector(".accordion-content");
      const accordionIcon = header.querySelector(".accordion-icon");
      const isExpanded = header.getAttribute("aria-expanded") === "true";

      // Optional: Close other accordions when one is opened
      document.querySelectorAll(".accordion-item").forEach(item => {
        if (
          item !== accordionItem &&
          !item.querySelector(".accordion-content").classList.contains("hidden")
        ) {
          item.querySelector(".accordion-content").classList.add("hidden");
          item.querySelector(".accordion-icon").classList.remove("rotate-180");
          item
            .querySelector(".accordion-header")
            .setAttribute("aria-expanded", "false");
        }
      });

      // Toggle current accordion
      accordionContent.classList.toggle("hidden");
      accordionIcon.classList.toggle("rotate-180");

      // Update ARIA attributes
      header.setAttribute("aria-expanded", !isExpanded);
    });
  });

  // Hero Mobile Menu Toggle
  const heroMobileMenuButton = document.getElementById(
    "hero-mobile-menu-button"
  );
  const heroMobileMenu = document.getElementById("hero-mobile-menu");

  if (heroMobileMenuButton && heroMobileMenu) {
    heroMobileMenuButton.addEventListener("click", () => {
      const isExpanded = heroMobileMenu.classList.contains("hidden");

      heroMobileMenu.classList.toggle("hidden");

      // Update ARIA attributes
      heroMobileMenuButton.setAttribute("aria-expanded", !isExpanded);

      // Update button icon and text
      const icon = heroMobileMenuButton.querySelector("svg");
      const text = heroMobileMenuButton.querySelector("span");

      if (heroMobileMenu.classList.contains("hidden")) {
        icon.innerHTML =
          "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16m-7 6h7'></path>";
        text.textContent = "Explore Our Site";
      } else {
        icon.innerHTML =
          "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12'></path>";
        text.textContent = "Close Menu";
      }
    });
  }

  // Sticky Header Functionality
  const stickyHeader = document.querySelector(".sticky-header");
  const heroSection = document.querySelector(".hero-bg");
  const wipBanner = document.querySelector(".bg-warn-300");
  const stickyMobileMenuButton = document.getElementById(
    "sticky-mobile-menu-button"
  );
  const stickyMobileMenu = document.getElementById("sticky-mobile-menu");

  // Calculate when to show sticky header (after hero + WIP banner)
  function updateStickyHeader() {
    if (heroSection && wipBanner && stickyHeader) {
      const heroHeight = heroSection.offsetHeight;
      const wipHeight = wipBanner.offsetHeight;
      const triggerPoint = heroHeight + wipHeight - 100; // Show 100px before fully scrolled past

      if (window.scrollY > triggerPoint) {
        stickyHeader.classList.add("visible");
      } else {
        stickyHeader.classList.remove("visible");
      }
    }
  }

  // Sticky Mobile Menu Toggle
  if (stickyMobileMenuButton && stickyMobileMenu) {
    stickyMobileMenuButton.addEventListener("click", () => {
      stickyMobileMenu.classList.toggle("hidden");
    });
  }

  // Scroll event listener for sticky header
  window.addEventListener("scroll", updateStickyHeader);

  // Initial check
  updateStickyHeader();

  // --- Enhanced Form Validation and Submission ---
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const submitButton = form.querySelector('button[type="submit"]');

  // Form validation functions
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateField(field, value) {
    const fieldName = field.name;
    let errorMessage = "";

    switch (fieldName) {
      case "name":
        if (!value.trim()) {
          errorMessage = "Full name is required";
        } else if (value.trim().length < 2) {
          errorMessage = "Full name must be at least 2 characters";
        }
        break;
      case "email":
        if (!value.trim()) {
          errorMessage = "Email address is required";
        } else if (!validateEmail(value)) {
          errorMessage = "Please enter a valid email address";
        }
        break;
      case "message":
        if (value && value.length > 1000) {
          errorMessage = "Message must be less than 1000 characters";
        }
        break;
    }

    return errorMessage;
  }

  function showFieldError(field, message) {
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }

    if (message) {
      // Create error message element
      const errorElement = document.createElement('p');
      errorElement.className = 'field-error text-red-600 text-sm mt-1';
      errorElement.setAttribute('role', 'alert');
      errorElement.setAttribute('aria-live', 'polite');
      errorElement.textContent = message;

      // Insert after the field
      field.parentNode.insertBefore(errorElement, field.nextSibling);

      // Add error styling to field
      field.classList.add('border-red-500', 'focus:ring-red-500');
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-describedby', `error-${field.name}`);
      errorElement.id = `error-${field.name}`;
    } else {
      // Remove error styling
      field.classList.remove('border-red-500', 'focus:ring-red-500');
      field.setAttribute('aria-invalid', 'false');
      field.removeAttribute('aria-describedby');
    }
  }

  function clearAllFieldErrors() {
    // Remove all field error messages
    const errorMessages = form.querySelectorAll('.field-error');
    errorMessages.forEach(error => error.remove());

    // Remove error styling from all fields
    const fields = form.querySelectorAll('input, textarea');
    fields.forEach(field => {
      field.classList.remove('border-red-500', 'focus:ring-red-500');
      field.setAttribute('aria-invalid', 'false');
      field.removeAttribute('aria-describedby');
    });
  }

  function setFormLoading(isLoading) {
    const fields = form.querySelectorAll('input, textarea');
    const buttons = form.querySelectorAll('button');

    if (isLoading) {
      // Disable all form elements
      fields.forEach(field => field.disabled = true);
      buttons.forEach(button => button.disabled = true);

      // Update submit button
      submitButton.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      `;
    } else {
      // Re-enable all form elements
      fields.forEach(field => field.disabled = false);
      buttons.forEach(button => button.disabled = false);

      // Reset submit button
      submitButton.innerHTML = 'Sign Up for Updates';
    }
  }

  // Real-time field validation
  const fields = form.querySelectorAll('input, textarea');
  fields.forEach(field => {
    field.addEventListener('blur', () => {
      const value = field.value;
      const errorMessage = validateField(field, value);
      showFieldError(field, errorMessage);
    });

    field.addEventListener('input', () => {
      // Clear error when user starts typing
      if (field.getAttribute('aria-invalid') === 'true') {
        showFieldError(field, '');
      }
    });
  });

  async function handleSubmit(event) {
    event.preventDefault();

    // Clear previous errors and status
    clearAllFieldErrors();
    formStatus.innerHTML = '';
    formStatus.className = 'mt-4 text-center';

    // Validate all fields
    let hasErrors = false;
    const formData = new FormData(event.target);

    fields.forEach(field => {
      const value = field.value;
      const errorMessage = validateField(field, value);
      if (errorMessage) {
        showFieldError(field, errorMessage);
        hasErrors = true;
      }
    });

    if (hasErrors) {
      formStatus.innerHTML = '<span class="text-red-600 font-semibold">Please correct the errors above and try again.</span>';
      formStatus.setAttribute('role', 'alert');
      formStatus.setAttribute('aria-live', 'polite');
      return;
    }

    // Set loading state
    setFormLoading(true);
    formStatus.innerHTML = '<span class="text-neutral-600">Sending your message...</span>';

    try {
      const response = await fetch(event.target.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success
        formStatus.innerHTML = '<span class="text-green-700 font-semibold">✅ Thanks for your submission! We\'ll be in touch soon.</span>';
        formStatus.setAttribute('role', 'status');
        formStatus.setAttribute('aria-live', 'polite');
        form.reset();

        // Clear any remaining field errors
        clearAllFieldErrors();
      } else {
        // Server error
        const errorData = await response.json();
        let errorMessage = 'Oops! There was a problem submitting your form';

        if (errorData.errors && Array.isArray(errorData.errors)) {
          errorMessage = errorData.errors.map(error => error.message).join(', ');
        }

        formStatus.innerHTML = `<span class="text-red-600 font-semibold">❌ ${errorMessage}</span>`;
        formStatus.setAttribute('role', 'alert');
        formStatus.setAttribute('aria-live', 'assertive');
      }
    } catch (error) {
      // Network error
      console.error('Form submission error:', error);
      formStatus.innerHTML = '<span class="text-red-600 font-semibold">❌ Network error. Please check your connection and try again.</span>';
      formStatus.setAttribute('role', 'alert');
      formStatus.setAttribute('aria-live', 'assertive');
    } finally {
      // Reset loading state
      setFormLoading(false);
    }
  }

  form.addEventListener("submit", handleSubmit);
}); // End of DOMContentLoaded
