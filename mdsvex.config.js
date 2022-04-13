import slug from "rehype-slug";

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

  layout: {
    blocks: "./src/lib/layouts/blocks.svelte"
  },

	smartypants: {
		dashes: 'oldschool',
    quotes: false
	},

	remarkPlugins: [],
	rehypePlugins: [[slug]]
};

export default config;
