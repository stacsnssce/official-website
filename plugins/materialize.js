import M from 'materialize-css'

const materialize = {
  sidenav (option = {}) {
    const elems = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elems, option)
  }
}

export default (context, inject) => {
  inject('materialize', materialize)
}
