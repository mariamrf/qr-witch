var defaults = {
	image: 'img/default.png',
	title: 'Put a URL to get started!'
};

var app = new Vue({
	el: '#app',
	data: {
		image: defaults.image,
		title: defaults.title,
		code_img: new QRCode(document.getElementById('qr-img-place'), {
			text: 'placeholder',
			colorLight: 'rgba(0,0,0,0)',
			width: 2000,
			height: 2000,
			useSVG: false
		}),
		code_svg: new QRCode(document.getElementById('qr-svg-place'), {
			text: 'placeholder',
			colorLight: 'rgba(0,0,0,0)',
			width: 2000,
			height: 2000,
			useSVG: true
		}),
		text: '',
		saved: ''
	},
	methods: {
		refresh: function (event) {
			event.preventDefault();
			$('.qr-img').fadeOut();
			$('#svg_link').fadeOut();
			this.saved = this.text;
			if (this.empty) {
				this.image = defaults.image;
				this.title = defaults.title;
			} else {
				this.code_img.makeCode(this.trimmed);
				this.code_svg.makeCode(this.trimmed);
				// for some reason it doesn't work directly as in the
				// docs with Vue, so we extract the generated image.
				this.image = this.code_img._el.lastElementChild.src;
				this.title = this.trimmed;
				exportSVG(
					this.code_svg._el.innerHTML,
					document.getElementById('svg_link'))
				$('#svg_link').fadeIn();
			}
			$('.qr-img').fadeIn()
		}
	},
	computed: {
		empty: function () {
			return this.trimmed.length === 0;
		},
		trimmed: function () {
			return $.trim(this.saved)
		}
	}
});

function exportSVG(source, link_element) {
	source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
	var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
	link_element.href = url;
}