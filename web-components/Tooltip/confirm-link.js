class ConfirmLink extends HTMLAnchorElement {
	connectedCallback() {
		this.addEventListener('click', e => {
			if (!confirm('Go outside')) {
				e.preventDefault();
			}
		});
	}
}

customElements.define('uc-confirm-link', ConfirmLink, { extends: 'a' });