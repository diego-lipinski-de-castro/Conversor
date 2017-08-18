"use strict";

new Vue({
	el: "#app",
	data: function data() {
		return {
			first: "",
			last: "",
			input: "",
			typeConversions: [{ value: "decimal", base: 10, name: "Decimal", result: "" }, { value: "hexadecimal", base: 16, name: "Hexadecimal", result: "" }, { value: "octadecimal", base: 8, name: "Octadecimal", result: "" }, { value: "binario", base: 2, name: "Binário", result: "" }],
			selectedType: ""
		};
	},
	created: function created() {
		self = this;
	},

	methods: {
		calculate: function calculate() {
			var typeItem = $.grep(self.typeConversions, function (type) {
				return type.value == self.selectedType;
			});

			var newDecimal = self.toDecimal(self.input, typeItem[0].base);

			self.typeConversions.forEach(function (item) {
				item.result = self.converion(newDecimal, item.base);
			});
		},
		toDecimal: function toDecimal(value, base) {
			return parseInt(value, base);
		},
		converion: function converion(value, newBase) {
			return self.toDecimal(value).toString(newBase);
		},
		reset: function reset() {
			self.input = "";
			self.selectedType = "";
			self.typeConversions.forEach(function (item) {
				item.result = "";
			});
		}
	}
});