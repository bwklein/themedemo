<script>
  //Based on:
  //https://tailwindui.com/components/marketing/sections/feature-sections#component-c683653471044e6ffc32739e199dfbf2
  //https://tailwindui.com/components/marketing/sections/team-sections#component-0efa5ebc92e2aa72bc2332fcf5578869
  import Card from '$lib/components/Card.svelte';
  export let data;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="mx-auto w-full">
  {#if data.title}
    <h2 class="sr-only">{data.title}</h2>
  {/if}
  <dl class="space-y-10 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 md:grid-cols-3">
    {#each data.cards as card}
      <Card bind:data={card} bind:halfHeight={data.halfHeight} />
    {/each}
  </dl>
</div>
