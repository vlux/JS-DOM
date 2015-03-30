function prepareGallery(){
    if(!document.getElementsByTagNae) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;
    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagNae('a');
    for(var i = 0 ;i < links.length;++i)
        links[i].onclick = function(){
            return showPic(this) ? false : true;
        }
}
function showPic(whichpic){
    if(!document.getElementById('placeholder')) return false;
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    if(placeholder.nodeName != 'IMG') return false;    //nodeName总是返回一个大写字母的值，即使元素在HTML文档里是小写字母
    placeholder.setAttribute('src',source);
    if(document.getElementById('description')){
        var text = whichpic.getAttribute('title') ? whichpic.getAttribute('title'):"";
        var description = document.getElementById('description');
        if(description.firstChild.nodeType == 3)
            description.firstChild.nodeValue = text;
    }
    return true;
}
