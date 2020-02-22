document.addEventListener('DOMContentLoaded', () => {
  createHeader()
  createFooter()
})

const createHeader = () => {
  const header = document.querySelector('.header')
  const headerHtml = `<nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand name" href="./index.html">Yuko Uda</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-portfolio" href="./portfolio.html">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>`
  if (header) {
    header.innerHTML = headerHtml
    activeNavLink('.nav-link')
  }
}

const activeNavLink = (navLinkClass) => {
  document.querySelectorAll(navLinkClass).forEach((navLink) => {
    if (location.href.includes(navLink.getAttribute('href').split("/").pop())) {
      navLink.classList.add('active')
    }
  })
}

const createFooter = () => {
  const footer = document.querySelector('.footer')
  const day = new Date()
  const year = day.getFullYear()
  const footerHtml = `<div class="container">
              <span>
                  Copyright © ${year} Yuko Uda
              </span>
            </div>`

  if (footer) {
    footer.innerHTML = footerHtml
  }
}