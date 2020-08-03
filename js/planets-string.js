(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let planetHTML = planetsArray.join("<br>");
    document.write(planetHTML);

    // <ul>
    //     <li>1</li>
    //     <li>2</li>
    // </ul>
    //

    var planetsUL = "<ul>";
    planetsArray.forEach(function (planet){
        planetsUL += "<li>" + planet + "</li>";
    })

    planetsUL += "</ul>";
    console.log(planetsUL);
    document.write(planetsUL);


})();