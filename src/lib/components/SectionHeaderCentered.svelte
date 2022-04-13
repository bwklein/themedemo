<script>
  //Based on: https://tailwindui.com/components/marketing/sections/header#component-2c3b25e7b9e4490edd7b6950692c0a11

  export let data = {
    toptext: 'Small Top Text ',
    title: 'Big Title Text',
    subtitle: 'Subtitle Text - Fairly long to see where the text wraps for this element, because who knows where things will end up.'
  };
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="w-full text-center">
  {#if data.toptext}
      <h2 class="text-base font-semibold text-teci-blue-dark tracking-wide uppercase">
      {data.toptext}
      </h2>
  {/if}
  <p class="mt-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
      {data.title}
  </p>
  {#if data.subtitle}
  <p class="max-w-4xl mt-5 mx-auto text-xl text-gray-500">
      {data.subtitle}
  </p>
  {/if}
</div>
