<script>
    let shown = false;
    export function show() {
      shown = true;
    }
    export function hide() {
      shown = false;
    }
  </script>
    
  <svelte:window
    on:keydown={e => {
      if (e.keyCode == 27) {
        hide();
      }
    }} />
  
  {#if shown}
    <div class="z-50 fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg bg-white">
        <button type="button" on:click={hide} class="absolute top-0 right-0 bg-white p-1 mr-2 mt-2 inline-flex items-center justify-center text-teci-blue-light hover:text-white hover:bg-teci-blue-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teci-blue-dark">
            <span class="sr-only">Close menu</span>
            <!-- Heroicon name: outline/x -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <slot />
      </div>
    </div>
  {/if}