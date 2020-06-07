import M from 'materialize-css'

const materialize = {
  sidenav (option = {}) {
    const elems = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elems, option)
  },
  carousel (option = {
    indicators: true
  }) {
    const elems = document.querySelectorAll('.carousel')
    M.Carousel.init(elems, option)
  }
}

export default (context, inject) => {
  inject('materialize', materialize)
}
