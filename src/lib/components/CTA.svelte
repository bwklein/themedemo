<script>
  export let data = {
    title: 'Ready to dive in?',
    subtitle: 'Start your free trial today.',
    links: [
      {
        linkText: 'Get Started',
        linkURL: '/product'
      }
    ]
  }
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<section class="bg-white mb-12">
  <div class="mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">{data.title}</span>
    </h2>
    <div class="mt-8 flex justify-center">
      {#each data.links as link}
        <div class="inline-flex shadow">
          <a href={link.linkURL} class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-teci-blue-light hover:bg-teci-blue-dark">{link.linkText}</a>
        </div>
      {:else}
        <br>
      {/each}
    </div>
  </div>
</section>