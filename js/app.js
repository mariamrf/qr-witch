var defaults = {
	image: 'img/default.png',
	title: 'Put a URL to get started!'
};

var app = new Vue({
	el: '#app',
	data: {
		image: defaults.image,
		title: defaults.title,
		code: new QRCode('qr-img-place', {
			text: 'placeholder',
			colorLight: 'rgba(0,0,0,0)',
			width: 2000,
			height: 2000
		}),
		text: '',
		saved: ''
	},
	methods: {
		refresh: function (event) {
			event.preventDefault();
			$('.qr-img').fadeOut();
			this.saved = this.text;
			if (this.empty) {
				this.image = defaults.image;
				this.title = defaults.title;
			} else {
				this.code.makeCode(this.saved);
				this.image = this.code._el.lastElementChild.src;
				this.title = this.saved;
			}
			$('.qr-img').fadeIn()
		}
	},
	computed: {
		empty: function () {
			return $.trim(this.saved).length === 0;
		}
	}
});