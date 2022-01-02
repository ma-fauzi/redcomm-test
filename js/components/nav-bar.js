class NavBar extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML = this.renderElement()

    this.openMenu()
  }

  renderElement () {
    return `
      <link rel="stylesheet" href="/style/index.css">
      <nav class="navbar">
        <div class="navbar-home">
          <img src="assets/house.svg" alt="home-icon">
        </div>
        <div>
          <ul id="navbar-list" class="navbar-list">
            <li class="navbar-content">Samsung Dekat di Hati</li>
            <li class="navbar-content">We Bring The Service To You</li>
            <li class="navbar-content">Indahnya Kebersamaan Ramadan</li>
            <li class="navbar-content">Tumpah Berkah Nasional</li>
          </ul>
        </div>
        <div id="nav-mobile" class="nav-mobile">
          <div class="mobile-menu-icon"></div>
          <div class="mobile-menu-icon"></div>
          <div class="mobile-menu-icon"></div>
        </div>
      </nav>
    `
  }

  openMenu () {
    const body_element = document.getElementsByTagName('body')[0]
    const mobile_menu = this.shadow.querySelector('.nav-mobile')
    const navbar_list = this.shadow.querySelector('#navbar-list')
    mobile_menu.addEventListener('click', (event) => {
      if (navbar_list.className === 'navbar-list') {
        navbar_list.className += ' menu-open'
      } else {
        navbar_list.className = 'navbar-list'
      }
    })

    body_element.addEventListener('click', (event) => {
      if (event.target.id !== 'nav-bar') {
        navbar_list.className = 'navbar-list'
      }
    })
  }
}


customElements.define('nav-bar', NavBar)