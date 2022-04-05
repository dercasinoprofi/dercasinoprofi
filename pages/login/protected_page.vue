<?php
/**
 * Copyright (C) 2013 peredur.net
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
include_once 'inc/db_connect.php';
include_once 'inc/functions.php';

sec_session_start();
 
require '../inc/header_open.php' ?>

		<title>CasinoVergleicher.com - </title>
		<meta name="description" content="">
		<script type="text/JavaScript" src="<?php echo HTDOCS_DIR ?>js/sha512.js"></script> 
        <script type="text/JavaScript" src="<?php echo HTDOCS_DIR ?>js/forms.js"></script> 

<?php require '../inc/header_logo.php' ?>

<?php require '../inc/navigation.php' ?>

    <body><center>
        <?php if (login_check($mysqli) == true) : ?>
        <p>Welcome <?php echo htmlentities($_SESSION['username']); ?>!</p>
            <p>
                This is an example protected page.  To access this page, users
                must be logged in.  At some stage, we'll also check the role of
                the user, so pages will be able to determine the type of user
                authorised to access the page.
            </p>
            <p>Return to <a href="<?php echo HTDOCS_DIR ?>login/">login page</a></p>
        <?php else : ?>
            <p>
                <span class="error">You are not authorized to access this page.</span> Please <a href="<?php echo HTDOCS_DIR ?>login/">login</a>.
            </p>
        <?php endif; ?>
    </center></body>
</html>