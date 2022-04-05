<?php
$error = filter_input(INPUT_GET, 'err', $filter = FILTER_SANITIZE_STRING);

if (! $error) {
    $error = 'Oops! An unknown error happened.';
}

require '../inc/header_open.php' ?>

		<title>CasinoVergleicher.com - Error</title>
		<meta name="description" content="">
		<script type="text/JavaScript" src="<?php echo HTDOCS_DIR ?>js/sha512.js"></script> 
        <script type="text/JavaScript" src="<?php echo HTDOCS_DIR ?>js/forms.js"></script> 
        <!-- muss in die css verpackt werden -->
        <style> 
        ul {
	        list-style-type: none;
        }
		</style>

<?php require '../inc/header_logo.php' ?>

<?php require '../inc/navigation.php' ?>

    <body><center>
        <h1>There was a problem</h1>
        <p class="error"><?php echo $error; ?></p>  
    </center></body>
</html>
