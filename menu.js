const navbar=`
<h1><img src=logo.webp>Amis des Etrangers au Togo</h1>
<nav>
  <ul>
    <li><a href=/>Bienvenu !</a></li>
    <li><a href=/qui.html>Qui sommes-nous ?</a>
    <ul>
    <li><a href=/equipe>Équipe de direction</a></li>
    <li><a href=/conseil>Conseil administratif</a></li>
    <li><a href=/onu.html>Ave l'ONU</a></li>
    </ul>
    </li>
    <li><a href=/que.html>Que faisons-nous ?</a></li>
  </ul>
</nav>
    `;
function setup() {
    document.getElementById("navbar").innerHTML = navbar;
}
