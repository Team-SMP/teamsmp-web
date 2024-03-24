/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
			sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
			title: ['"Space Grotesk"', "Inter", "Helvetica", "Arial", "sans-serif"],
			mono: ['"JetBrains Mono"', "Consolas", '"Courier New"', "monospace"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
