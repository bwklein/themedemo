---
title: Demo of MDsveX and Svelte Components in Markdown
summary: How to use Svelte components in Markdown content.
date: 2021-12-29T08:00:00.000Z
lastmod: 2022-03-20T18:43:07.699Z
categories:
  - thunderhead
  - announce
layout: blocks
page_sections:
  - name: Main Content
    fieldGroup: sidebar-content
    fullWidth: true
    rightRail: false
    toc: true
---
<script>
  import Math from "$lib/components/Math.svelte"
  import YT from "$lib/components/YT.svelte"
  import Figure from "$lib/components/Figure.svelte"
</script>

You can import components below the front matter of a Markdown file and then use them in the content.

For example, with the following text below the front matter.

```
<script>
  import Math from "tecitheme/components/Math.svelte"
</script>
```

## Svelte Components
You can then use the Math component in your document to render complex Math expressions, inline <Math math={'v_{b}'} /> like this.

Or as a block, centered in the document as shown below.

<Math math={'v_{b}=v_{max}\\times v_{f}(D)\\times v_{ft}'} displayMode />

There any component can be created and added in to the text in the same way.

## Embeds

Below is an embedded YouTube video, followed by a Figure image with a caption.

### YouTube 

<YT v="lJIrF4YjHfQ" />

### Figure

<Figure
  title="Javascript on Laptop"
  caption='Javascript on Laptop, Photo by <a href="https://unsplash.com/@clemhlrdt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clément Hélardot</a> on <a href="https://unsplash.com/s/photos/computer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
  image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
/>