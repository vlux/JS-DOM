function stripeTables() {
	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName('table');
	for (var i = 0; i < tables.length; ++i) {
		var odd = false;
		var rows = table[i].getElementsByTagName('tr');
		for (var j = 0; j < rows.length; ++j) {
			if (odd == true) {
				addClass(row[j], 'odd');
				odd = false;
			} else
				odd = true;
		}
	}
}

//jQuery
$('tr:odd').addClass('odd');

function addClass(element, value) {
	if (!element.className)
		element.className = value;
	else {
		newClassName = element.className;
		newClassName += '';
		newClassName += value;
		element.className = newClassName;
	}
}

//通过className属性设置某个元素的class属性时将替换（而不是）追加该元素原有的class设置
//所以用字符串拼接操作。
