function add(array) {
    for (var i = 0; i < array; i++) {
        var div_element = document.createElement("div");
        div_element.innerHTML = '<div><button onclick=add(1)>新たなボタン' + i + '</button></div>';
        var parent_object = document.getElementById("button");
        parent_object.appendChild(div_element);
    }
}

function setlist(frag) {
    if (frag) {
        for (var i = 0; i < array; i++) {
            var div_element = document.createElement("div");
            div_element.innerHTML = '<div><button onclick=add(1)>新たなボタン' + i + '</button></div>';
            var parent_object = document.getElementById("button");
            parent_object.appendChild(div_element);
        }
    }
    else { var x = 1; }
}