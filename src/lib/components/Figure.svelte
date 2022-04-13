<script>
  export let image;
  export let title;
  export let caption;
</script>

<section class="flex justify-center not-prose mb-8">
  <figure class="bg-white w-auto mx-auto shadow-lg border border-slate-100 p-2">
    <a href={image}>
      <img class="w-full" src={image} alt={title} title={title}>
    </a>
    {#if caption}
      <figcaption class="text-center p-2">{@html caption}</figcaption>
    {/if}
  </figure>
</section>
