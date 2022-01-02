class PromoView extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML = this.rendenElement()
  }

  rendenElement () {
    return `
      <link rel="stylesheet" href="/style/index.css">

      <div class="promo">
        <div class="promo-title">
          <h3>Galaxy Promo</h3>
          <p>Pilihan Galaxy idaman dengan penawaran spesial Ramadan</p>
        </div>
        <div class="promo-cards">
          <div class="promo-card">
            <div class="promo-card-img"></div>
            <div class="promo-card-title">
              Galaxy Note & S Series   
            </div>
            <div class="promo-card-btn">
              <button>
                SEE MORE
              </button>
            </div>
          </div>

          <div class="promo-card">
            <div class="promo-card-img"></div>
            <div class="promo-card-title">
              Galaxy A & M Series
            </div>
            <div class="promo-card-btn">
              <button>
                SEE MORE
              </button>
            </div>
          </div>

          <div class="promo-card">
            <div class="promo-card-img"></div>
            <div class="promo-card-title">
              Galaxy Wearables   
            </div>
            <div class="promo-card-btn">
              <button>
                SEE MORE
              </button>
            </div>
          </div>

          <div class="promo-card">
            <div class="promo-card-img"></div>
            <div class="promo-card-title">
              Galaxy Tab 
            </div>
            <div class="promo-card-btn">
              <button>
                SEE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}


customElements.define('promo-view', PromoView)