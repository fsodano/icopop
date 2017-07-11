export class IcoPop {
  constructor (config = {class: '', source: 'html', content: ''}) {
    this.config = config
    this.overlayWrapper = null
    this.overlay = null
    this.contentWrapper = null
    this.content = null
    this.init()
  }

  init () {
    this.overlayWrapper = document.createElement('div')
    this.overlay = document.createElement('div')
    this.contentWrapper = document.createElement('div')
    this.content = document.createElement('div')
    this.hide()

    this.contentWrapper.id = 'icopop-content-wrapper'
    this.content.id = 'icopop-content'
    this.overlayWrapper.id = 'icopop-overlay-wrapper'
    this.overlay.id = 'icopop-overlay'

    this.overlayWrapper.appendChild(this.overlay)
    this.contentWrapper.appendChild(this.content)
    document.body.appendChild(this.overlayWrapper)
    document.body.appendChild(this.contentWrapper)

    this.attachHandlers()
  }

  show () {
    if (this.config.class !== '') {
      this.content.setAttribute('class', this.config.class)
    }

    if (this.config.source === 'html') {
      this.content.innerHTML = this.config.content
    }

    if (this.config.source === 'div') {
      this.content.innerHTML = document.getElementById(this.config.content).innerHTML
    }

    this.overlayWrapper.style.display = ''
    this.contentWrapper.style.display = ''
  }

  hide () {
    this.overlayWrapper.style.display = 'none'
    this.contentWrapper.style.display = 'none'
  }

  attachHandlers () {
    this.overlayWrapper.addEventListener('click', () => this.hide())

    window.addEventListener('keydown', (event) => {
      //ESC
      if (event.keyCode === 27) {
        return this.hide()
      }
    })
  }
}

