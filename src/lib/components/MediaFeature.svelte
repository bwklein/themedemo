<script>
  import YT from "$lib/components/YT.svelte"
  export let data;
</script>

<section class="w-full mx-auto flex flex-col md:flex-row items-center justify-center">
  {#if data.video}
  <div class="w-full max-w-xl {data.position === 'right' ? 'mb-4 md:mb-0' : 'mb-0'}">
    <YT v={data.video} />
  </div>
  {:else if data.image}
  <div class="block w-full max-w-xl mb-4 md:mb-0">
    <figure>
      <a href={data.image}>
        <img class="aspect-video object-cover" src={data.image} alt={data.name}/>
      </a>
    </figure>
  </div>
  {/if}
  <div class="w-full max-w-xl flex flex-col justify-center {data.position === 'right' ? 'md:order-last md:ml-8' : 'md:order-first md:mr-8'}">
    <div class="w-full max-w-3xl">
      <h2 class="text-lg font-bold pb-4">{data.name}</h2>
      <span class="prose">{@html data.text}</span>
    </div>
    {#if data.ctaText}
    <div class="text-right md:text-left mt-4">
      <a class="inline-block btn" href={data.ctaURL}>{data.ctaText}</a>
    </div>
    {/if}
  </div>
</section>