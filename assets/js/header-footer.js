document.addEventListener('DOMContentLoaded', () => {
  createHeader()
  createFooter()
})

const createHeader = () => {
  const header = document.querySelector('.header')
  const headerHtml = `<div class="header-contents">
            <div class="name">Yuko Uda</div>
            <nav>
                <ul class="navigation">
                    <li><a href="./index.html">About</a></li>
                    <li><a href="./portfolio.html">Portfolio</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>`
  if (header) {
    header.innerHTML = headerHtml
  }
}

const createFooter = () => {
  const footer = document.querySelector('.footer')
  const day = new Date()
  const year = day.getFullYear()
  const footerHtml = `Copyright © ${year} Yuko Uda`
  if (footer) {
    footer.innerHTML = footerHtml
  }
}