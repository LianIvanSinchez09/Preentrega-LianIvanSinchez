const footerLinks = [
    {text: "Productos", url: "../pages/productos.html"},
    {text: "Empleados", url: "../pages/empleados.html"},
    {text: "Contacto", url: "../pages/contacto.html"},
    {text: "Newsletter", url: "../pages/newsletter.html"}
]

const listaFooter = document.querySelector(".list-unstyled");

const footerLinksHTML = footerLinks.map(link => `
    <li><a class="nav-item link-nav" href="${link.url}">${link.text}</a></li>
    `);

listaFooter.innerHTML = footerLinksHTML.join('');
