/*On click*/
      function teaser() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var Bio = JSON.parse(this.responseText);
            document.getElementById("bio").innerHTML =
              Bio.msg + "&nbsp;" + Bio.name + "&#39;s Bio!";
            window.location.href = Bio.bio_url;
            console.log = "clicked";
          }
        };
        xmlhttp.open("GET", "/config.json", true);
        xmlhttp.send();
      }

/*Bio*/
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var Bio = JSON.parse(this.responseText);
    document.getElementById("bio").innerHTML = Bio.bio;
  }
};
xmlhttp.open("GET", "/config.json", true);
xmlhttp.send();

/*ATR*/

window.onload = title();

function title() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var Link = JSON.parse(this.responseText);
      document.title = Link.symbol + Link.user + " | Instalink";
      document.getElementById("Atrubution").innerHTML =
        "This page was created by " +
        Link.user +
        "! " +
        Link.user +
        " used InstaLink to create this page Click here to get yours now!";
    }
  };
  xmlhttp.open("GET", "/config.json", true);
  xmlhttp.send();
}

function Atrubution() {
  window.location.href = "refer.html";
}

/*User*/

var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var Link = JSON.parse(this.responseText);
          document.getElementById("user").innerHTML = Link.symbol + Link.user;


        }
      };
      xmlhttp.open("GET", "/config.json", true);
      xmlhttp.send();