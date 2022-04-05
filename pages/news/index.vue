<template>
	<div></div>
</template>
<script>
export default {
  name: "mobile888poker",
  head() {
    return {
      title: "888 Poker Mobile App im Test | CasinoVergleicher.com",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "888 Poker App für Android und iPhone im Qualitätstest von Casino Vergleicher. Testberichte, Screenshots und Videos. Hole deinen exklusiv Bonus im Echtgeldmodus.",
        },
      ],
    };
  },
};
</script>



<?php require '../inc/header_open.php' ?>

    		<title>Bestcasinocheck News Blog</title>
    		<meta name="description" content="Hier bekommst du alle wichtigen Informationen über die aktuellen Sonderaktionen, verpasse keine der Exklusiven Bonusmöglichkeiten die nur auf dich warten.">
    		<!-- <meta name="author" content=""> -->

		<link rel="canonical" href="https://www.casinovergleicher.com/news/" />
		<!-- <link rel="alternate" hreflang="en" href="http://bestcasinocheck.net/news/" />    		 -->

<?php require '../inc/header_logo.php' ?>

<?php require '../inc/navigation.php' ?>

		<section class="banner">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="box news">
							<div class="cold-md-6 pull-left">
								<h1>Casino Neuigkeiten - immer aktuell</h1>
							</div> 						
						</div>
					</div>
				</div>											
			</div>
	
		</section>

					<style type="text/css">
						#newsbox {
							background: rgba(0, 0, 0, 0) -moz-linear-gradient(center top , #555555 0%, #444444 100%) repeat scroll 0 0;
							padding: 25px;
							color: white;
							border-radius: 8px;
						}

						#newsheader {
							color:#00b000;
							font-size: 30px;
							display: block;
    						font-family: "Oswald";
    						font-weight: normal;
    						letter-spacing: 1px;
    						line-height: 120%;
    						margin-top: 20px;
    						text-transform: uppercase;
    						clear: both;
						}

						.post-title {
							font-size: 30px;
    						display: block;
    						font-family: "Oswald";
    						font-weight: normal;
    						letter-spacing: 1px;
    						line-height: 120%;
    						margin-top: 20px;
    						text-transform: uppercase;
    						clear: both;
						}

						}

						</style>

		<section class="content">

			<div class="container">

				<div class="col-md-8">            
                
                	<!-- News Teaser -->
						<?php require 'teaser/allnews.php' ?>
						
					<!-- Pager -->
						<ul class="pager">
							<li class="next">
								<a href="#" class="btn btn-bcc small">Ältere Beiträge anzeigen &rarr;</a>
							</li>
						</ul>
				
				</div>

				<aside>
							
							<div class="col-md-4 hidden-xs hidden-sm mob">
							<div class="box" style="margin-bottom: -40px;">
							<span class="title5">RSS News Feed</span>
								<a href="<?php echo HTDOCS_DIR ?>news-feed.xml" title="Abonniere unseren News Feed"><img src="<?php echo HTDOCS_DIR ?>img/rss-feed.png" alt="Abonniere unseren News Feed" class="left" style="padding:20px"> Abonniere unseren News Feed</a>
							</div></div>	

					<div class="col-md-4">
						<div class="box" style="margin-bottom: -40px;">
	 							<?php require '../inc/mail-signup.php' ?>
	 						</div>
					</div>
	 <?php require '../inc/sidebar_widgets.php' ?>

				</aside>

			</div>

		</section>

<?php require '../inc/footer.php' ?>