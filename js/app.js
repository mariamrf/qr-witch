var defaults = {
	image: 'img/default.png',
	title: 'Put a URL to get started!'
};

var app = new Vue({
	el: '#app',
	data: {
		image: defaults.image,
		title: defaults.title,
		code: new QRCode('qr-img-place', 'placeholder'),
		text: '',
		saved: ''
	},
	methods: {
		refresh: function (event) {
			event.preventDefault();
			this.saved = this.text;
			if (this.empty) {
				this.image = defaults.image;
				this.title = defaults.title;
			} else {
				this.code.makeCode(this.saved);
				this.image = this.code._el.lastElementChild.src;
				this.title = this.saved;
			}
		}
	},
	computed: {
		empty: function () {
			return $.trim(this.saved).length === 0;
		}
	}
});