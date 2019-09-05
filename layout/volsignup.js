


console.log("Hello");


var requestURL = 'js/events.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var yourEvents = request.response;
  blockBuild(yourEvents);
}


function blockBuild(jsonObj) {
var eventInfo = jsonObj['events'];

  for (i = 0; i<jsonObj.events.length; i++) {
    var blocks = document.createElement("DIV");

    blocks.id = "blocks"
    document.getElementById("blockHolders").append(blocks);
    var colors = ["#E8BE18", '#EE9080', '#4F79B3', "#4FA5B3"];
    blocks.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];


    var group = document.createElement("DIV");
    group.id = "group";
    blocks.appendChild(group);

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

  }
}
