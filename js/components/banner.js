class BannerView extends HTMLElement {
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

      <div class="banner">
        <button class="banner-btn">BELI DI SAMSUNG.COM</button>
        <button class="banner-btn">BELI DI TOKO TERDEKAT</button>
      </div>
    `
  }
}


customElements.define('banner-view', BannerView)