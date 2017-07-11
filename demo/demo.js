import { IcoPop } from '../src/icopop'

const icopop = new IcoPop({class: 'myclass', source: 'html', content: 'This is a popup!'})
window.addEventListener('load', () => {
  document.getElementById('icopop').addEventListener('click', () => {
    console.log('icopop')
    icopop.show()
  })
})
