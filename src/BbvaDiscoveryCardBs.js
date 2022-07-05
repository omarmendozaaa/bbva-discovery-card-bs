import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './BbvaDiscoveryCardBs-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<bbva-discovery-card-bs></bbva-discovery-card-bs>
```

##styling-doc

@customElement bbva-discovery-card-bs
*/
export class BbvaDiscoveryCardBs extends LitElement {
  static get is() {
    return 'bbva-discovery-card-bs';
  }

  getData(data) {
    this.discovery = data;
  }
  // Declare properties
  static get properties() {
    return {
      name: { type: String },
      discovery: { type: Object },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.base_url = "https://image.tmdb.org/t/p/original"
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('bbva-discovery-card-bs-shared-styles'),
    ];
  }

  // Define a template
  render() {
    return html`
    <div class="mb-3">
    <div class="card-body">
        <div class="row g-0">
          <div class="col-md-2 text-center align-self-center">
            <img src="${this.base_url}${this.discovery.poster_path}" class="img-fluid rounded" style="width: 90%" alt="${this.discovery.title}" />
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h5 class="card-title">${this.discovery.title}</h5>
              <p class="card-text">
                ${this.discovery.overview}
              </p>
              <p class="card-text">
                <small class="text-muted">${this.discovery.release_date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
