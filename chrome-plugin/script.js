setInterval(function() {
    var title = document.getElementById("videotitle").innerHTML;
    var next  = document.getElementById("nextvideo").innerHTML;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:9995/?title=" + title + "&next=" + next, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var body = JSON.parse(xhr.responseText);
            if (body.next) {
                document.getElementById("nextbutton").click();
            } else if (body.prev) {
                document.getElementById("previousbutton").click();
            }
        }
    }
    xhr.send();
}, 1000);