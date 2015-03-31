function displayAbbreviations() {
	if (!document.getElmentsByTagName || !document.createElement || !document.createTextNode)
		return false;
	var links = document.getElmentsByTagName('a');
	var akeys = new Array();
	for (var i = 0; i < links.length; ++i) {
		var current_link = links[i];
		if (!current_link.getAttribute('accesskey')) continue;
		var key = current_link.getAttribute('accesskey');
		var text = current_link.lastChild.nodeValue;
		akeys[key] = text;
	}
	var list = document.createElement('ul');
	for (key in akeys) {
		var text = akeys[key];
		var str = key + ": " + text;
		var item = document.createElement('li');
		var item_text = document.createTextNode('str');
		item.appendChild(item_text);
		list.appendChild(item);
	}
	var header = document.createElement('h3');
	var header_text = document.createTextNode('Accesskey');
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(list);
}
