function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload ! = 'function')
        window.onload = func;
    else
        window.onload = function(){
            oldonload();
            func();
        }
}
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement)
        parent.appendChild(newElement);
    else
        parent.insertBefore(newElement,targetElement.nextSibling);
}
function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;
    var placeholder = document.createElement('img');
    placeholder.setAttribute('id','placeholder');
    placeholder.setAttribute('src','');
    placeholder.setAttribute('alt','my image gallery');
    var description = document.createElement('p');
    description.setAttribute('id','description');
    var desctext = document.createTextNode('choose a image');
    description.appendChild(desctext);
    var gallery = document.getElementById('imagegallery');
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}
function prepareGallery(){
    if(!document.getElementsByTagNae) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;
    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagNae('a');
    for(var i = 0 ;i < links.length; ++i){
        links[i].onclick = function(){
            return showPic(this);
        }
    links[i].onkeypress = links[i].onclick;
    }
}
function showPic(whichpic){
    if(!document.getElementById('placeholder')) return true;
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    if(placeholder.nodeName != 'IMG') return false;    //nodeName总是返回一个大写字母的值，即使元素在HTML文档里是小写字母
    placeholder.setAttribute('src',source);
    if(!document.getElementById('description')) return false;
    if(whichpic.getAttribute('title'))
        var text = whichpic.getAttribute('title')
    else
        var text = '';
    var description = document.getElementById('description');
    if(description.firstChild.nodeType == 3)
        description.firstChild.nodeValue = text;
    return false;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery)
