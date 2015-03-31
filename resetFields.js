function resetFields(whichform) {
	if (Modernizr.input.placeholder) return;
	for (var i = 0; i < whichform.elements.length; ++i) {
		var element = whichform.elements[i];
		if (element.type == 'submit') continue;
		var check = element.placeholder || element.getAttribute('placeholder');
		if (!check) continue;
		element.onfocus = function() {
			var txt = this.placeholder || this.getAttribute('placeholder');
			if (this.value == txt) {
				this.className = '';
				this.value = '';
			}
		}
		element.onblur = function() {
			if (this.value == '') {
				this.className = 'placeholder';
				this.value = this.placeholder || this.getAttribute('placeholder');
			}
		}
		element.onblur();
	}
}

function prepareForms() {
	for (var i = 0; i < document.forms.length; ++i) {
		var thisform = document.forms[i];
		resetFields(thisform);
	}
}
window.onload = function() {
	prepareForms();
}
