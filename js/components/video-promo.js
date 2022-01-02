class VideoPromo extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML = this.renderElement()
  }

  renderElement () {
    return `
      <link rel="stylesheet" href="/style/index.css">

      <div class="video-promo">
        <div class="video-promo-title">
          <h3>Samsung Dekat Di Hati</h3>
          <p>Rayakan kebersamaan Ramadan dengan berbagi keceriaan. Tetap dekat dihati walau jarak memisahkan.</p>
        </div>
        <div class="video-promo-container">
          <iframe class="video-promo-content" width="560" height="315" src="https://www.youtube.com/embed/l-D2at1smic?autoplay=1&controls=0" title="YouTube video player"></iframe>
        </div>
      </div>
    `
  }
}


customElements.define('video-promo', VideoPromo)