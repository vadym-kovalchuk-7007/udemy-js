class Tooltip extends HTMLElement {
   constructor () {
      super();
      this.attachShadow({ mode: 'open' })
      this._ttContainer;
      this._ttText = 'Default tt text';
      // const template = document.getElementById('tt-template');
      // this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.innerHTML = `
      <style>
      div {
      background-color : black;
      color : white;
      padding : 5px 5px;
      position : absolute;
      zIndex : 10;
      top:1.5rem;
      left:.75rem;
      }
      :host(.important) {
         background: #ccc;
      }
      :host-context(p) {
         font-weight:bold;
      }
      span {
         background:black;
         color:white;
         border-radius:50%;
         padding: .1rem .5rem;
      }
      ::slotted(.hl) {
         border-bottom: 1px solid red;
         color:red;
      }
      </style>
      <span> ?</span>
      <slot>Some def DOM text</slot>
      `;
   }

   connectedCallback() {
      if (this.hasAttribute('tt-text')) {
         this._ttText = this.getAttribute('tt-text');
      }
      this.style.position = 'relative';
      const ttIcon = this.shadowRoot.querySelector('span');
      ttIcon.addEventListener('mouseenter', this.#showTooltip.bind(this))
      ttIcon.addEventListener('mouseleave', this.#hideTooltip.bind(this))
      this.shadowRoot.appendChild(ttIcon);
   }

   #showTooltip() {
      this._ttContainer = document.createElement('div');
      // this._ttContainer.style.backgroundColor = 'black';
      // this._ttContainer.style.color = 'white';
      // this._ttContainer.style.padding = '5px 5px';
      // this._ttContainer.style.position = 'absolute';
      // this._ttContainer.style.zIndex = '10';
      this._ttContainer.textContent = this._ttText;
      this.shadowRoot.appendChild(this._ttContainer);
   }

   #hideTooltip() {
      this.shadowRoot.removeChild(this._ttContainer);
   }
}

customElements.define('tt-tooltip', Tooltip);