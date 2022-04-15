<script>
    import SectionHeaderCentered from '$lib/components/SectionHeaderCentered.svelte';
    import ThreeColumn from '$lib/components/ThreeColumn.svelte';
    import NewsGrid from '$lib/components/NewsGrid.svelte';
    import YT from '$lib/components/YT.svelte';
    import CTA from '$lib/components/CTA.svelte';
    import SidebarContent from '$lib/components/SidebarContent.svelte';
    import MediaFeature from '$lib/components/MediaFeature.svelte';
    import TrialForm from '$lib/components/TrialForm.svelte';

    export let title
    export let date
    export let lastmod
    export let page_sections
    export let posts
    export let summary
</script>

<svelte:head>
  <title>{title} | Thunderhead Engineering</title>
  <meta name="description" content={summary}>
</svelte:head>

<article class="flex flex-col space-y-12">
{#each page_sections as section}
  {#if section.fieldGroup == "heading-centered"}
    <SectionHeaderCentered bind:data={section} />
  {:else if section.fieldGroup == "three-column"}
    <ThreeColumn bind:data={section} />
  {:else if section.fieldGroup == "news-grid"}
    <NewsGrid bind:data={section} bind:posts={posts} />
  {:else if section.fieldGroup == "video"}
    <YT bind:v={section.v} />
  {:else if section.fieldGroup == "cta-center"}
    <CTA bind:data={section} />
  {:else if section.fieldGroup == "sidebar-content"}
    <SidebarContent bind:data={section} {title} {date} {lastmod} {summary}>
      <slot/>
    </SidebarContent>
  {:else if section.fieldGroup == "media-feature"}
    <MediaFeature bind:data={section} />
  {:else if section.fieldGroup == "trial"}
    <TrialForm />
  {:else if section.fieldGroup == "content"}
    <div class="content prose"><slot/></div>
  {/if}
{/each}
</article>