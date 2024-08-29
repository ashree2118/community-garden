function recipe() {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");
    let temperature = prompt("What temperature is it?");
    if (temperature > 0) {


        alert(
            "Thank you, " +
            name +
            " ! We have emailed you the recipe, Enjoy your lemonade 🍋"

        );

    } else {
        alert(
            "Thank you, " +
            name +
            " ! We have emailed you the recipe, Enjoy your lemonade 🍋 but don't add ice"

        );
    }
}

let recipeButton = document.querySelector(" button");
recipeButton.addEventListener("click", recipe);