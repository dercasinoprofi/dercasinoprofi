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
include_once 'inc/register.inc.php';
include_once 'inc/functions.php';

require '../inc/header_open.php' ?>

		<title>CasinoVergleicher.com - Dein Online Casino Vergleich</title>
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

    <body>
        <!-- Registration form to be output if the POST variables are not
        set or if the registration script caused an error. -->
        <center><h1>Register with us</h1>
        <?php
        if (!empty($error_msg)) {
            echo $error_msg;
        }
        ?>
        <ul>
            <li>Usernames may contain only digits, upper and lower case letters and underscores</li>
            <li>Emails must have a valid email format</li>
            <li>Passwords must be at least 6 characters long</li>
            <li>Passwords must contain
                <ul>
                    <li>At least one upper case letter (A..Z)</li>
                    <li>At least one lower case letter (a..z)</li>
                    <li>At least one number (0..9)</li>
                </ul>
            </li>
            <li>Your password and confirmation must match exactly</li>
        </ul>
        <form method="post" name="registration_form" action="<?php echo HTDOCS_DIR?>login/register_success.php">
            Username: <input type='text' name='username' id='username' /><br>
            Email: <input type="text" name="email" id="email" /><br>
            Password: <input type="password"
                             name="password" 
                             id="password"/><br>
            Confirm password: <input type="password" 
                                     name="confirmpwd" 
                                     id="confirmpwd" /><br>
            <input type="button" 
                   value="Register" 
                   onclick="return regformhash(this.form,
                                   this.form.username,
                                   this.form.email,
                                   this.form.password,
                                   this.form.confirmpwd);" /> 
        </form>
        <p>Return to the <a href="<?php echo HTDOCS_DIR ?>login/">login page</a>.</p>
        </center>
    </body>
</html>
