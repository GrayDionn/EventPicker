var requestURL = 'js/events.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var yourEvents = request.response;
  blockBuild(yourEvents);
  tagShow();

}

function blockBuild(jsonObj) {
  var eventInfo = jsonObj['events'];
  var tagInfo = eventInfo[0].category;
  console.log(tagInfo);

    var totalActivities = document.createElement("P");
    totalActivities = jsonObj.events.length;
    totalActivities.id = "totalActivities";
    document.getElementById("total").append(totalActivities);

  for (i = 0; i<jsonObj.events.length; i++) {
    var blocks = document.createElement("DIV");
    console.log(eventInfo[i].category.length);

    blocks.id = "blocks"
    document.getElementById("blockHolders").append(blocks);
    var colors = ["#E8BE18", '#EE9080', '#4F79B3', "#4FA5B3"];


    var group = document.createElement("DIV");
    group.id = "group";
    blocks.appendChild(group);

    for (l in eventInfo[i].tags){
    var newdiv = document.createElement("DIV");
    newdiv.id="newdiv";
    blocks.prepend(newdiv);

    eventInfo[i].tags[l].innerHTML = eventInfo[i].tags[l].value;
    eventInfo[i].tags[l].id = "text";
    newdiv.append( eventInfo[i].tags[l] + " ");
    }
    var title = document.createElement("P");
    title.id = "title";
    title.innerHTML = "Neighborhood Event";
    group.appendChild(title);

    var date = document.createElement('h2');
    date.textContent = eventInfo[i].date;
    date.id = "date";
    group.appendChild(date);

    var name = document.createElement('p');
    name.textContent = eventInfo[i].name;
    name.id = "name";
    group.appendChild(name);

    var category = document.createElement("p");
    category.textContent = eventInfo[i].category;

    var descHolder = document.createElement("DIV");
    descHolder.id = "descHolder";
    descHolder.style.display = "none";
    group.appendChild(descHolder);

    function colorChange () {
    if  (category.textContent === "Food"){
          blocks.id = "blocks1" ;
          blocks.className = "blocks";
    } else if (category.textContent === "Music"){
          blocks.id = "blocks2";
                blocks.className = "blocks";

    } else if (category.textContent === "Family"){
          blocks.id = "blocks3";
                blocks.className = "blocks";

    } else if (category.textContent === "Art"){
          blocks.id = "blocks4";
                blocks.className = "blocks";

    }
      else if (category.textContent === "Sports"){
          blocks.id = "blocks5";
                  blocks.className = "blocks";
    }}

    colorChange();
    };


};


function tagShow () {
  var blocks = document.getElementsByClassName("blocks");
  var tagButton = document.createElement("P");
  tagButton.innerHTML = "Filter by";
  tagButton.id = "tagButton";
  document.getElementById("infoHolder").appendChild(tagButton);

  var chip = document.createElement("Button");
  chip.innerHTML ="Food";
  chip.id = "chip";
  tagButton.append(chip);
}
