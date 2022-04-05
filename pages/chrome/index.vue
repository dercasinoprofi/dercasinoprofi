	

<html>
	 <head>
        <link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/evernote-web-clipper/pioclpoplcdbaefihamjohnefbikjilc?hl=de">
        <script>
            function ExtInstall() {
                if (chrome.app.isInstalled) 
                    alert("already installed!");
                else 
                    chrome.webstore.install();
            }
        </script>
    </head>
    <body>
    <iframe src="http://www.google.de" width="500" height="500" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/OHXjxWaQs9o" frameborder="0" allowfullscreen></iframe>
        <button onclick="chrome.webstore.install()" id="install-button">Add to Chrome</button>
<script>
if (chrome.app.isInstalled) {
  document.getElementById('install-button').style.display = 'none';
}
</script>
<script type="text/javascript" src="https://code.jquery.com/jquery-git1.min.js"></script>
    </body>
 </html>