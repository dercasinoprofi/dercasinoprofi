<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <a href="/" title="Online Casinos und Boni im Vergleich">
              <div class="logo">Casino Vergleicher</div>
            </a>
          </div>
          <div class="col-lg-7"></div>
        </div>
      </div>
    </header>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="glyphicon glyphicon-align-justify"></span>
          </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li>
              <a href="/"
                ><span
                  class="glyphicon glyphicon-home"
                  aria-hidden="true"
                ></span>
                Start</a
              >
            </li>
            <li><a href="/test/">Casinos</a></li>
            <li><a href="/bonus/">Bonus</a></li>
            <li class="nav-slots">
              <a href="/slots/">Slots</a>
            </li>
            <li><a href="/mobile-apps/">Mobile</a></li>
            <li>
              <a href="/paypal/">Paypal Casinos</a>
            </li>
            <li>
              <a href="/zahlungsmethoden/">Zahlungsmethoden</a>
            </li>
            <li class="dropdown">
              <a href="/spielregeln/" data-toggle="dropdown"
                >Spielregeln <span class="caret"></span
              ></a>
              <ul class="dropdown-menu">
                <li>
                  <a href="/spielregeln/baccarat.php">Baccarat</a>
                </li>
                <li>
                  <a href="/spielregeln/blackjack.php">BlackJack</a>
                </li>
                <li>
                  <a href="/spielregeln/craps.php">Craps</a>
                </li>
                <li>
                  <a href="/spielregeln/poker.php">Poker</a>
                </li>
                <li>
                  <a href="/spielregeln/roulette.php">Roulette</a>
                </li>
                <li>
                  <a href="/spielregeln/">Alle Spielgereln anzeigen</a>
                </li>
              </ul>
            </li>
            <li><a href="/software/">Software</a></li>
            <li><a href="/ratgeber/">Ratgeber</a></li>
            <li><a href="/news/">News</a></li>
            <li><a href="/siegel/">Gütesiegel</a></li>
          </ul>
        </div>
        <!-- <?php require 'language.php' ?> -->
        <div class="btn-group dropdown" style="float: right">
          <a href="/karte/" class="btn btn-default"
            ><span class="glyphicon glyphicon-map-marker"></span> Casinos in
            deiner Nähe</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

