function prepareInternalnav() {
	if (!document.getElmentsByTagName || !document.getElementById || !document.createTextNode)
		return false;
	var articles = document.getElmentsByTagName('article');
	if (articles.length == 0) return false;
	var navs = articles[0].getElmentsByTagName('nav');
	if (navs.length == 0) return false;
	var nav = navs[0];
	var links = document.getElmentsByTagName('a');
	for (var i = 0; i < links.length; ++i) {
		var sectionId = links[i].getAttribute('href').split('#')[1];
		if (!document.getElementById(sectionId)) continue;
		document.getElementById(sectionId).style.display = 'none';
		links[i].destination = sectionId;
		links[i].onclick = function() {
			showSection(this.destination);
			return false;
		}
	}
}
