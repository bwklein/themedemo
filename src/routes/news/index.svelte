<script context="module">
	export async function load({ fetch }) {
		const posts = await fetch('/posts.json').then((res) => res.json());

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
import NewsGrid from "$lib/components/NewsGrid.svelte";
export let posts
let data = {
    title: "All the News",
    subtitle: "You should know."
}
</script>

<NewsGrid bind:data bind:posts />
