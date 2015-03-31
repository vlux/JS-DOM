//For those browser which doesn't support placeholder
//Use the DOM to achieve the func

if (!Modernizr.input.placeholder) {
	var input = document.getElmentById('first-name');
	input.onfocus = function() {
		var txt = this.placeholder || this.getAttribute('placeholder');
		if (this.value == txt)
			this.value == '';
	}
	input.onblur = function() {
		if (this.value == '')
			this.value = this.placeholder || this.getAttribute('placeholder');
	}
	input.onblur();
}
