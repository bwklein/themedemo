<script>
  export let data;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<section class="mb-12">
  <div class="mx-auto text-center px-4 sm:px-6 lg:px-8">
    {#if data.title}
      <h2 class="{ data.subtitle ? 'mb-4' : 'mb-8'} text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">{data.title}</span>
      </h2>
    {/if}
    {#if data.subtitle}
      <h2 class="mb-8 text-xl font-bold tracking-tight text-teci-blue-dark">
        <span class="block">{data.subtitle}</span>
      </h2>
    {/if}
    {#if data.links}
      <div class="flex flex-col space-x-0 space-y-8 justify-center items-center md:space-x-8 md:space-y-0 md:flex-row md:justify-around">
        {#each data.links as link}
          <div class="inline-flex shadow w-full max-w-xs">
            <a href={link.linkURL} class="whitespace-nowrap w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-teci-blue-light hover:bg-teci-blue-dark">{link.linkText}</a>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>