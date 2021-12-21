function meals (){
    var typed = document.getElementById("textBox").value;

    // var url = `https://api.covid19api.com/country/${typed}/status/confirmed`;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${typed}`;


    fetch (url)
    .then(res => res.json())
    .then(data => process(data.meals));
}

function process (data) {
    // console.log (data);
    var infoBox = document.getElementById("mealsData");

    for (var i=0; i<data.length; i++ ){
        var id = data[i].idMeal;
        var name = data[i].strMeal;
        // var name1 = data[0].strMeal;
        var thumb = data[i].strMealThumb;
        var des = data[i].strInstructions;

        console.log (id, name);
        var newDiv = document.createElement("div");
        newDiv.classList.add("styles");
        newDiv.innerHTML = `<p> Meal Name: ${name} </p>
                            <img src=${thumb}>
                            <p> ${des} </p>`;

        infoBox.appendChild(newDiv);

        // document.getElementById("first").src = thumb;
        // document.getElementById("title").innerHTML = name1;
        // document.getElementById("des").innerHTML = des;

    }
}