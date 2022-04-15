<script>
  import { DateTime } from "luxon";
  export let data;
  export let posts;
</script>

<div class="relative mx-auto w-full divide-y-2 divide-gray-200">
  <div class="flex flex-col sm:flex-row justify-between sm:items-end space-y-4 sm:space-y-0">
    <div>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.title}</h1>
      <p class="text-xl text-gray-500">{data.subtitle}</p>
    </div>
    <div class="mj-w-button mj-w-btn w-32" data-token="c59142d82197a4f86bc30e8fa80e1ea8">
      <div class="mj-w-button-content w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-white hover:bg-teci-blue-dark bg-teci-blue-light focus:outline-none focus:border-teci-blue-dark transition duration-150 ease-in-out">
        Subscribe
      </div>
    </div>
  </div>
  <div class="mt-6 grid gap-16 pt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
    {#each posts as post}
    <a class="block h-full" href={post.path}>
      <div class="flex flex-col items-stretch h-full">    
        <time class="block mb-1 text-sm text-gray-500" datetime={post.meta.date}>{DateTime.fromISO(post.meta.date).toLocaleString()}</time>
        <p class="mb-2 text-xl font-semibold text-gray-900">{post.meta.title}</p>
        <p class="flex-1 mb-2 text-base text-gray-500">{post.meta.summary}</p>
        <p class="text-sm font-semibold text-teci-blue-light hover:text-teci-blue-dark">Read full article<span aria-hidden="true">&nbsp;→</span></p> 
      </div>
    </a>
    {/each}
  </div>
</div>
