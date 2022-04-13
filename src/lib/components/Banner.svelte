<script>
    export let showCTA
    export let shortText
    export let longText
    export let ctaText
    export let ctaLink
</script>

<div x-data="banner">
    <div x-show="open" class="bg-teci-blue-light">
      <div class="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <!-- Banner Text -->
            <p class="font-medium text-white truncate">
              <!-- Short Text -->
              <span class="md:hidden">
                {shortText}
              </span>
              <!-- Long Text-->
              <span class="hidden md:inline">
                {longText}
              </span>
            </p>
          </div>
          
          {#if showCTA}
          <!-- CTA Button -->
          <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <div class="shadow-sm">
              <a href={ctaLink}
                class="flex items-center justify-center px-4 py-2 border shadow-md border-transparent text-sm leading-5 font-medium text-teci-blue-light bg-white hover:text-white hover:bg-teci-blue-dark focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                aria-label="Button to {ctaText}"
                title="Click to {ctaText}"
              >
                {ctaText}
              </a>
            </div>
          </div>
          {/if}
          <!-- Hide Banner Button -->
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button x-on:click="toggle" type="button"
              class="-mr-1 flex p-2 hover:bg-teci-blue-dark focus:outline-none focus:bg-teci-blue-dark sm:-mr-2 transition ease-in-out duration-150"
              aria-label="Dismiss"
              title="Dismiss Banner"
            >
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    