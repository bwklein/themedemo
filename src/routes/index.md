---
title: Home of ThunderTheme
layout: blocks
page_sections:
  - name: Section Heading
    fieldGroup: heading-centered
    toptext: Home of
    title: ThunderTheme
    subtitle: The Thunderhead Design System
  - name: Main Content
    fieldGroup: sidebar-content
    fullWidth: true
    rightRail: false
    toc: false
  - name: News Grid
    fieldGroup: news-grid
    title: All the News
    subtitle: You should know.
  - name: Trial Form
    fieldGroup: trial
lastmod: 2022-03-20T19:04:59.220Z
date: 2022-03-20T18:50:14.618Z
summary: Design System for Thunderhead Engineering.
---
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
  import Modal from '$lib/components/Modal.svelte';
  import Figure from '$lib/components/Figure.svelte';
  let modal
</script>

## Demo Homepage

This is a demo of some components in a Markdown page.
Where we have enough text to expand the text to full prose width when `fullWidth` is not true.

## Links

- [Product](/product)
- [Features](/features)
- [Sidebar](/sidebar)
- [News Index](/news)
  - [Post 1](/news/post1)
  - [Post 2](/news/post2)
- [Admin](/admin) *Protected
- [posts.json](/posts.json)

## Image for Visual Interest

<Figure
  title="Javascript on Laptop"
  caption='Javascript on Laptop, Photo by <a href="https://unsplash.com/@clemhlrdt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clément Hélardot</a> on <a href="https://unsplash.com/s/photos/computer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
  image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
/>

<div class="prose">
  <h2>Modal Dialog</h2>
  <p>You can pop up a modal dialog with the Modal component.</p>
  <button on:click={modal.show()} class="btn">Open It!</button>
</div>

<Modal bind:this={modal}>
  <div class="mt-3 text-center">
    <h2 class="text-lg leading-6 font-medium text-gray-900">Sweet Modal!</h2>
    <div class="mt-2 px-7 py-3">
      <p class="text-sm text-gray-500">This is a demo of the Modal Dialog.</p>
    </div>
  </div>
</Modal>
