/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	singleQuote: false,
	trailingComma: "none",
	semi: true,
	printWidth: 100,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro"
			}
		}
	]
};
