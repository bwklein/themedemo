<script>
  import { DateTime } from "luxon";
  export let data;
  export let posts;
</script>

<div class="relative mx-auto w-full divide-y-2 divide-gray-200">
  <div>
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {data.title}
    </h2>
    <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
      <p class="text-xl text-gray-500">{data.subtitle}</p>
      <form class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email-address"
            type="email"
            autocomplete="email"
            required
            class="w-full appearance-none border-b-2 border-b-gray-800 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-teci-blue-light focus:outline-none focus:ring-teci-blue-light lg:max-w-xs"
            placeholder="Enter your email"
          />
        </div>
        <div
          class="mt-2 flex w-full flex-shrink-0 shadow-sm sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto"
        >
          <button type="button" class="btn">Subscribe</button>
        </div>
      </form>
    </div>
  </div>
  <div class="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
    {#each posts as post}
      <div>
        <p class="text-sm text-gray-500">
          <time datetime={post.meta.date}>{DateTime.fromISO(post.meta.date).toLocaleString()}</time>
        </p>
        <a href={post.path} class="mt-2 block">
          <p class="text-xl font-semibold text-gray-900">
            {post.meta.title}
          </p>
          <p class="mt-3 text-base text-gray-500">
            {post.meta.summary}
          </p>
        </a>
        <div class="mt-3">
          <a
            href={post.path}
            class="text-base font-semibold text-teci-blue-light hover:text-teci-blue-dark"
          >
            Read full story
          </a>
        </div>
      </div>
    {/each}
  </div>
</div>
