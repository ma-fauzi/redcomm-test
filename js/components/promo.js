class PromoView extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML = `
      <link rel="stylesheet" href="/style/index.css">

      <div class="promo">
        test
      </div>
    `
  }
}


customElements.define('promo-view', PromoView)