class FooterView extends HTMLElement {
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

      <footer>
        RedComm - Front End Developer Test
      </footer>
    `
  }
}


customElements.define('footer-view', FooterView)