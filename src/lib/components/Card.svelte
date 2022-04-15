<script>
  //Allows icons from https://fonts.google.com/icons?selected=Material+Icons by name in the format 'icon-XXXX'.

	import Icon from '$lib/components/Icon.svelte';
  export let data;
  export let halfHeight;
</script>

<div class="group space-y-4">
  {#if data.image}
  <div class="w-full {halfHeight ? 'aspect-video' : 'aspect-square'} bg-cover bg-no-repeat shadow-md border border-gray-200 flex items-center justify-center" 
    style="background-image: url({data.image});"
  >
    <div class="md:group-hover:backdrop-grayscale py-8 flex flex-col w-full h-full justify-center items-center {halfHeight ? 'space-y-4' : 'space-y-8'} transition">
      {#each data.links as link}
        <a href={link.linkURL} class="whitespace-nowrap hidden md:group-hover:block btn w-3/4 text-center">{link.linkText}</a>
      {/each}
    </div>
  </div>
  {/if}
  <div>
    <a href={data.cardURL}>
      <div class="flex flex-row items-start space-x-4 mb-2">
        {#if data.icon}
        <div class="grid place-items-center">
          <Icon classes={data.classes} icon={data.icon} />
        </div>
        {/if}
        <div class="leading-none font-medium flex flex-col">
          {#if data.heading}
          <h3 class="text-2xl leading-none">{data.heading}</h3>
          {/if}
          {#if data.subheading}
          <p class="text-teci-blue-dark leading-6">{data.subheading}</p>
          {/if}
        </div>
      </div>
      {#if data.text}
      <div class="text-lg">
        <p class="text-gray-500">{data.text}</p>
        <span class="text-sm font-medium text-teci-blue-light lg:mt-4">{data.cardLinkText}<span aria-hidden="true">&nbsp;→</span></span>
      </div>
      {/if}
    </a>
  </div>
</div>