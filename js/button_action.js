function add()
{
    var div_element = document.createElement("div");
    div_element.innerHTML = '<div><button onclick="add()">新たなボタン</button></div>';
    var parent_object = document.getElementById("button");
    parent_object.appendChild(div_element);
}