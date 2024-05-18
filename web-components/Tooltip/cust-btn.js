class CustomButton extends HTMLElement {
	constructor () {
		super();
		this._pText = 'More infos!';
		this._isHidden = true;
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
		<style>p {display:none;}</style>
		<div><button>Show</button><p><slot>Dummy</slot></p></div>
		`;
	}

	connectedCallback() {
		if (this.hasAttribute('text')) this._pText = this.getAttribute('text');
		const btn = this.shadowRoot.querySelector('button');
		const infoEl = this.shadowRoot.querySelector('p');
		// infoEl.textContent = this._pText;
		btn.addEventListener('click', () => {
			infoEl.style.display = this._isHidden ? 'block' : 'none';
			btn.textContent = this._isHidden ? 'Hide' : 'Show';
			this._isHidden = !this._isHidden;
		});
	}
}

customElements.define('cust-btn', CustomButton);