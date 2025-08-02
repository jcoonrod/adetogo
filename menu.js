const navbar=`
<h1><img src=logo.webp>Amis des Etrangers au Togo</h1>
<nav>
  <ul>
    <li><a href=/>Bienvenu !</a></li>
    <li><a href=/qui.html>Qui sommes-nous ?</a></li>
    <li><a href=/que.html>Que faisons-nous ?</a></li>
  </ul>
</nav>
    `;
function setup() {
    document.getElementById("navbar").innerHTML = navbar;
}
