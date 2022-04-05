						<style type="text/css">
						#newsbox {
							/** background: rgba(0, 0, 0, 0) -moz-linear-gradient(center top , #555555 0%, #444444 100%) repeat scroll 0 0; **/
							/** padding: 25px; **/
							/** color: white; **/
							/** border-radius: 8px; **/
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

						<div id="newsbox">
						<div class="box" style="margin-top: 0;">
							<div class="cold-md-6 pull-left">
								<hr>
								<center><span id="newsheader">Alle Casino Neuigkeiten im Überblick</span></center>
								<hr>
							</div> 
						</div>         
                	

                	<!-- News Teaser Posts -->
						<?php require 'teaser/allteaser.php' ?>
						
					<!-- Pager -->
						<ul class="pager">
							<li class="next">
								<a href="<?php echo HTDOCS_DIR ?>news/" class="btn btn-bcc small">Alle News Anzeigen &rarr;</a>
							</li>
							<a href="<?php echo HTDOCS_DIR ?>news-feed.xml" class= "hidden-xs hidden-sm mob"><img src="<?php echo HTDOCS_DIR ?>img/rss-feed.png" title="Abonniere unseren News Feed" class="content left"/></a>
						</ul>
						</div>