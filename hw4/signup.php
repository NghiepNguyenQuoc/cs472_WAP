<?php include("top.html"); ?>

    <form action="signup-submit.php" method="post">
        <fieldset>
            <legend>New User Signup:</legend>
            <strong class="column">Name: </strong>
            <input type="text" name="txtName" size=20 maxlength="16">
            <div class="clear5"></div>
            <strong class="column">Gender:</strong>
            <input type="radio" name="rdGender" id="rdMale" value="Male"> <label for="rdMale">Male</label>
            <input type="radio" name="rdGender" id="rdFemale" value="Female"><label for="rdFemale">Female</label>
            <div class="clear5"></div>
            <strong class="column">Age:</strong>
            <input type="text" name="txtAge" size="6" maxlength="2">
            <div class="clear5"></div>
            <strong class="column">Personality Type: </strong>
            <input type="text" name="txtPersonalType" size="6" maxlength="4">(<a
                    href="http://www.humanmetrics.com/cgi-win/JTypes2.asp">Don't you know your type?</a>)
            <div class="clear5"></div>
            <strong class="column">Favorite OS:</strong>
            <select name="dpFavoriteOS">
                <option selected>Windows</option>
                <option>Mac OS X</option>
                <option>Linux</option>
            </select>
            <div class="clear5"></div>
            <strong class="column">Seeking Age:</strong>
            <input type="text" placeholder="min" name="ageMin" size="6" maxlength="2"> to
            <input type="text" placeholder="max" name="ageMax" size="6" maxlength="2">
            <div class="clear5"></div>
            <input type="submit" value="Sign Up"/>
        </fieldset>
    </form>
<?php include("bottom.html"); ?>