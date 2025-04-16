export function updateErrors( element, errorDiv ) {
    errorDiv.querySelectorAll(".error-message").forEach(el => el.remove());
    element.classList.remove('error');

    for (const [error, message] of Object.entries(element.errors)) {
        element.classList.add('error');
        addErrorMessage( errorDiv, message );
      }
}

export function addErrorMessage(element, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    element.appendChild(errorDiv);
}