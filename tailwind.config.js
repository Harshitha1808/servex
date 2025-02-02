module.exports = {
	purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				mono: ["Inconsolata", "monospace"]
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
