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

if (login_check($mysqli) == true) {
    $logged = 'in';
} else {
    $logged = 'out';
}

 require '../inc/header_open.php' ?>

		<title>CasinoVergleicher.com - Anmeldung</title>
		<meta name="description" content="">
		<script type="text/JavaScript" src="<?php echo HTDOCS_DIR ?>js/sha512.js"></script> 
        <script type="text/JavaScript" src="<?php echo HTDOCS_DIR ?>js/forms.js"></script> 

<?php require '../inc/header_logo.php' ?>

<?php require '../inc/navigation.php' ?>

    <body>
        <?php
        if (isset($_GET['error'])) {
            echo '<p class="error">Error Logging In!</p>';
        }
        ?> 
        <center><form action="<?php echo HTDOCS_DIR ?>login/inc/process_login.php" method="post" name="login_form"> 			
            Email: <input type="text" name="email" />
            Password: <input type="password" 
                             name="password" 
                             id="password"/>
            <input type="button" 
                   value="Login" 
                   onclick="formhash(this.form, this.form.password);" /> 
        </form>
        <p>If you don't have a login, please <a href="<?php echo HTDOCS_DIR ?>login/register.php">register</a></p>
        <p>If you are done, please <a href="<?php echo HTDOCS_DIR ?>login/inc/logout.php">log out</a>.</p>
        </center>
    </body>
</html>