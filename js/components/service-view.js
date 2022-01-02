class ServiceView extends HTMLElement {
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

      <div class="service">
        <div class="service-cards">
          <div class="service-card">
            <div class="service-card-img"></div>
            <div class="service-card-tag">
              #GETTHROUGHTHISTOGETHER  
            </div>
            <div class="service-card-title">
              Bersama Kita Lewati  
            </div>
            <div class="service-card-text">
              Saling Menjaga demi hari baru penuh harapan. Stay strong. 
            </div>
            <div class="service-card-btn">
              <button>
                SEE MORE
              </button>
            </div>
          </div>

          <div class="service-card">
            <div class="service-card-img"></div>
            <div class="service-card-tag">
              SAMSUNG SERVICE  
            </div>
            <div class="service-card-title">
              We Bring The Service To You
            </div>
            <div class="service-card-text">
              Tetap aman dan nyaman dengan layanan digital dan antar jemput. 
            </div>
            <div class="service-card-btn">
              <button>
                SEE MORE
              </button>
            </div>
          </div>

          <div class="service-card">
            <div class="service-card-img"></div>
            <div class="service-card-tag">
              TV 
            </div>
            <div class="service-card-title">
              Indah Kebersamaan Ramadan 
            </div>
            <div class="service-card-text">
              Hadirkan Keceriaan Ramadan walau di rumah saja.
            </div>
            <div class="service-card-btn">
              <button>
                SEE MORE
              </button>
            </div>
          </div>

          <div class="service-card">
            <div class="service-card-img"></div>
            <div class="service-card-tag">
              HOME APPLIANCES 
            </div>
            <div class="service-card-title">
              Tumpah Berkah Nasional 
            </div>
            <div class="service-card-text">
              Tetap di rumah dan nikmati berkah penawaran spesial yang melimpah.
            </div>
            <div class="service-card-btn">
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


customElements.define('service-view', ServiceView)