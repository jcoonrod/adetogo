const navbar=`
<h1><img src=logo.webp>Amis des Etrangers au Togo
<a href=https://facebook.com/Amis-Des-Etrangers-Au-Togo-1410382492536147; target=_blank>
<img src=facebook.png width=20px height=auto></a> 
<a href=https://x.com/adet_ong target=_blank><img src=twitter.png width=20px height=auto></a>
</h1>
<nav>
  <ul>
    <li><a href=/>Bienvenu !</a></li>
    <li><a href=/qui.html>Qui sommes-nous ?</a>
    <ul>
    <li><a href=/equipe.html>Équipe de direction</a></li>
    <li><a href=/conseil.html>Conseil administratif</a></li>
    <li><a href=/onu.html>Avec l\'ONU</a></li>
    </ul>
    </li>
    <li><a href=/que.html>Que faisons-nous ?</a>
    <ul>
    <li><a href=/energie.html>Energie</a></li>
    <li><a href=/environnement.html>Environnement</a></li>
    <li><a href=/plan.html>stratégie</a></li>
    </ul>
    </li>
  </ul>
</nav>
    `;
function setup() {
    document.getElementById("navbar").innerHTML = navbar;
}
