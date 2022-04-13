<script>
  import Icon from "$lib/components/Icon.svelte";
  import { slide } from 'svelte/transition';
  import { cubicIn, cubicOut, bounceIn, bounceOut } from 'svelte/easing';

  let openMenu = '';

  export function clickOutside(node) {
    const handleClick = (event) => {
      if ((!node.contains(event.target)) && (event.target.innerText.toLowerCase() != node.parentElement.id)) {
        node.dispatchEvent(new CustomEvent("outclick"));
      }
    };
    document.addEventListener("click", handleClick, true);
    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      }
    };
  }

  function handleEscape({key}) {
      if (key === 'Escape') {
        openMenu = '';
      }
  }
</script>

<svelte:window on:keyup={handleEscape} />

<header class="relative bg-white">
  <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"></div>
  <div class="relative max-w-7xl mx-auto flex justify-between items-center px-4 py-5 md:space-x-6 sm:px-6 sm:py-4 lg:px-8 md:justify-start lg:space-x-10">
    <!-- Nav Icon Linked to WWW Homepage -->
    <div class="flex-shrink-0">
      <a href="https://www.thunderheadeng.com" class="flex">
        <span class="sr-only">Thunderhead Engineering</span>
        <Icon classes="h-10 w-auto" />
      </a>
    </div>

    <!-- Nav Menu -->
    <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
      <nav class="flex md:space-x-6 lg:space-x-10">
        <!-- Products -->
        <div id="products">
          
          <button type="button" on:click={() => ( openMenu == 'products' ? openMenu = '' : openMenu = 'products' )}
            class="text-gray-500 group bg-white inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teci-blue-light"
            aria-expanded="{openMenu == 'products'}">
            <span class:text-gray-900="{openMenu == 'products'}">Products</span>
             <!-- Heroicon name: solid/chevron-down -->
            <svg class="ml-2 h-5 w-5 group-hover:text-gray-900 {openMenu === 'products' ? 'text-gray-900 rotate-180' : 'text-gray-400'}"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>

          <!-- Flyout menu -->
          {#if openMenu == 'products'}
          <div class="absolute z-10 top-full inset-x-0 transform shadow-lg bg-white" 
            use:clickOutside on:outclick={() => (openMenu = '')}
            in:slide={{ duration: 250, easing: cubicOut }}
            out:slide={{ duration: 150, easing: cubicIn }}
          >
            <div class="max-w-7xl mx-auto grid gap-y-8 px-4 py-8 sm:grid-cols-2 sm:gap-8 sm:px-6 lg:grid-cols-3 lg:px-8">
              <a href="https://www.thunderheadeng.com/pyrosim/" class="-m-3 p-3 flex flex-col justify-between hover:bg-gray-50">
                <div class="flex md:h-full lg:flex-col">
                  <div class="flex-shrink-0">
                    <Icon classes="h-12 w-auto" icon="pyrosim" />
                  </div>
                  <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                    <div>
                      <p class="text-base font-medium text-gray-900">
                        PyroSim
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Analyze fire control and smoke dissipation in various structures for fire protection and
                        safety or investigation.
                      </p>
                    </div>
                    <p class="mt-2 text-sm font-medium text-teci-blue-light lg:mt-4">Learn more <span
                        aria-hidden="true">&rarr;</span></p>
                  </div>
                </div>
              </a>

              <a href="https://www.thunderheadeng.com/pathfinder/" class="-m-3 p-3 flex flex-col justify-between hover:bg-gray-50">
                <div class="flex md:h-full lg:flex-col">
                  <div class="flex-shrink-0">
                    <Icon classes="h-12 w-auto" icon="pathfinder" />
                  </div>
                  <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                    <div>
                      <p class="text-base font-medium text-gray-900">
                        Pathfinder
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Understand pedestrian egress and congestion hazards for fire protection and safety or urban
                        planning.
                      </p>
                    </div>
                    <p class="mt-2 text-sm font-medium text-teci-blue-light lg:mt-4">Learn more <span
                        aria-hidden="true">&rarr;</span></p>
                  </div>
                </div>
              </a>

              <a href="https://www.thunderheadeng.com/petrasim/" class="-m-3 p-3 flex flex-col justify-between hover:bg-gray-50">
                <div class="flex md:h-full lg:flex-col">
                  <div class="flex-shrink-0">
                    <Icon classes="h-12 w-auto" icon='petrasim' />
                  </div>
                  <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                    <div>
                      <p class="text-base font-medium text-gray-900">
                        PetraSim
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Model nonisothermal multiphase flow and transport in fractured and porous media for
                        environmental engineering.
                      </p>
                    </div>
                    <p class="mt-2 text-sm font-medium text-teci-blue-light lg:mt-4">Learn more <span
                        aria-hidden="true">&rarr;</span></p>
                  </div>
                </div>
              </a>
            </div>

            <!-- Action Buttons -->
            <div class="relative bg-gray-50">
              <div class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                <div class="flow-root">
                  <a href="https://store2.thunderheadeng.com/cart"
                    class="-m-3 p-3 flex items-center text-base font-medium text-gray-900 hover:bg-gray-100">
                    <!-- Heroicon name: outline/shopping-cart -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span class="ml-3">Order Online</span>
                  </a>
                </div>

                <div class="flow-root">
                  <a href="https://store2.thunderheadeng.com/trial/"
                    class="-m-3 p-3 flex items-center text-base font-medium text-gray-900 hover:bg-gray-100">
                    <!-- Heroicon name: outline/clock -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="ml-3">30-day Trial</span>
                  </a>
                </div>

                <div class="flow-root">
                  <a href="mailto:sales@thunderheadeng.com"
                    class="-m-3 p-3 flex items-center text-base font-medium text-gray-900 hover:bg-gray-100">
                    <!-- Heroicon name: outline/mail -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="ml-3">Contact Sales</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/if}
        </div>

        <!-- Support -->
        <div id="support" class="relative">

          <button type="button" on:click={() => ( openMenu == 'support' ? openMenu = '' : openMenu = 'support' )} 
            class="text-gray-500 group bg-white inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teci-blue-light"
            aria-expanded="{openMenu == 'support'}">
            <span class:text-gray-900="{openMenu == 'support'}">Support</span>
             <!-- Heroicon name: solid/chevron-down -->
            <svg class="ml-2 h-5 w-5 group-hover:text-gray-900 {openMenu === 'support' ? 'text-gray-900 rotate-180' : 'text-gray-400'}"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>

          {#if openMenu == 'support'}
          <div class="absolute z-40 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
            use:clickOutside on:outclick={() => (openMenu = '')}
            in:slide={{ duration: 250, easing: cubicOut }}
            out:slide={{ duration: 150, easing: cubicIn }}
          >
            <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              <a href="https://support.thunderheadeng.com/docs/"
                class="-m-3 p-3 flex items-start hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: outline/book-open -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teci-blue-light" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    Documentation
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    Manuals and Reference Documents for all products
                  </p>
                </div>
              </a>

              <a href="https://support.thunderheadeng.com/tutorials/"
                class="-m-3 p-3 flex items-start hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: outline/library -->
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-teci-blue-light"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    Tutorials
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    Getting Started, Applications and Feature Demos
                  </p>
                </div>
              </a>

              <a href="https://support.thunderheadeng.com/release-notes/"
                class="-m-3 p-3 flex items-start hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: outline/document-text -->
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-teci-blue-light"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    Release Notes
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    Detailed changes each product release
                  </p>
                </div>
              </a>

              <a href="https://support.thunderheadeng.com/answers/"
                class="-m-3 p-3 flex items-start hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: outline/cursor-click -->
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-teci-blue-light"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    FAQs
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    Frequently Asked Questions (FAQs) and Answers
                  </p>
                </div>
              </a>

            </div>
            <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
              <div class="flow-root">
                <a href="https://forum.thunderheadeng.com/"
                  class="-m-3 p-3 flex items-center text-base font-medium text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: outline/user-group -->
                  <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span class="ml-3">User Forum</span>
                </a>
              </div>

              <div class="flow-root">
                <a href="mailto:support@thunderheadeng.com"
                  class="-m-3 p-3 flex items-center text-base font-medium text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: outline/mail -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="ml-3">Contact Support</span>
                </a>
              </div>
            </div>
          </div>
          {/if}
        </div>

        <!-- Events -->
        <div id="events" class="relative">
          
          <button type="button" on:click={() => ( openMenu == 'events' ? openMenu = '' : openMenu = 'events' )}
            class="text-gray-500 group bg-white inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teci-blue-light"
            aria-expanded="{openMenu == 'events'}">
            <span class:text-gray-900="{openMenu == 'events'}">Events</span>
             <!-- Heroicon name: solid/chevron-down -->
            <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-900 {openMenu === 'events' ? 'text-gray-900 rotate-180' : 'text-gray-400'}"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>

          {#if openMenu == 'events'}
          <div class="absolute z-40 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
            use:clickOutside on:outclick={() => (openMenu = '')}
            in:slide={{ duration: 250, easing: cubicOut }}
            out:slide={{ duration: 150, easing: cubicIn }}
          >
            <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              <a href="https://www.thunderheadeng.com/training/"
                class="-m-3 p-3 flex items-start hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: outline/calendar -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teci-blue-light" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    Calendar
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    See upcoming events schedule.
                  </p>
                </div>
              </a>

              <a href="https://www.femtc.com/"
                class="-m-3 p-3 flex items-start hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: outline/presentation-chart-line -->
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-teci-blue-light"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    FEMTC
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    Fire and Evacuation Modeling Technical Conference
                  </p>
                </div>
              </a>

              <a href="https://www.thunderheadeng.com/training/"
                class="-m-3 p-3 flex items-start hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: outline/cursor-click -->
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-teci-blue-light"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    Training
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    Both Online and In-person training options.
                  </p>
                </div>
              </a>

            </div>
            <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
              <div class="flow-root">
                <a href="https://store.thunderheadeng.com/php/event-payment.php"
                  class="-m-3 p-3 flex items-center text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
                  <!-- Heroicon name: outline/play -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="ml-3">Register</span>
                </a>
              </div>

              <div class="flow-root">
                <a href="mailto:training@thunderheadeng.com"
                  class="-m-3 p-3 flex items-center text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
                  <!-- Heroicon name: outline/mail -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="ml-3">Contact Training</span>
                </a>
              </div>
            </div>
          </div>
          {/if}
        </div>

        <!-- Company -->
        <div id="company" class="relative">
          
          <button type="button" on:click={() => ( openMenu == 'company' ? openMenu = '' : openMenu = 'company' )}
            class="text-gray-500 group bg-white inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teci-blue-light"
            aria-expanded="{openMenu == 'company'}">
            <span class:text-gray-900="{openMenu == 'company'}">Company</span>
             <!-- Heroicon name: solid/chevron-down -->
            <svg class="ml-2 h-5 w-5 group-hover:text-gray-900 {openMenu === 'company' ? 'text-gray-900 rotate-180' : 'text-gray-400'}"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>

          {#if openMenu == 'company'}
          <div class="absolute z-40 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
            use:clickOutside on:outclick={() => (openMenu = '')}
            in:slide={{ duration: 250, easing: cubicOut }}
            out:slide={{ duration: 150, easing: cubicIn }}
          >
            <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              <a href="https://www.thunderheadeng.com/about/"
                class="-m-3 p-3 flex items-start hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: outline/information-circle -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teci-blue-light" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    About
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    Learn more about Thunderhead Engineering
                  </p>
                </div>
              </a>

              <a href="https://www.thunderheadeng.com/news/"
                class="-m-3 p-3 flex items-start hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: outline/speakerphone -->
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-teci-blue-light"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    News
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    Announcements for our products and services
                  </p>
                </div>
              </a>

              <a href="https://www.thunderheadeng.com/job-openings/"
                class="-m-3 p-3 flex items-start hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: outline/briefcase -->
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-teci-blue-light"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    Jobs
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    Become a part of the Thunderhead team
                  </p>
                </div>
              </a>

              <a href="https://www.thunderheadeng.com/pyrosim/pyrosim-licensing/#distributors"
                class="-m-3 p-3 flex items-start hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: outline/globe-alt -->
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-teci-blue-light"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    Partners
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    International reseller and distributor network
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/if}
        </div>
      </nav>
    </div>

    <!-- Search -->
    <div class="flex-1 flex items-center justify-center ml-2 md:px-0 md:ml-0 lg:justify-end">
      <div class="max-w-lg w-full lg:max-w-xs">
        <form class="m-0" action="https://support.thunderheadeng.com/search/" method="get">
          <label for="search" class="sr-only">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <!-- Heroicon name: solid/search -->
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <input id="search" name="teci-search[query]" placeholder="Search" type="search"
              class="block w-full pl-10 pr-3 py-2 m-0 rounded-none border border-gray-300 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teci-blue-light focus:border-teci-blue-light sm:text-sm"
            />
          </div>
        </form>
      </div>
    </div>

    <!-- Application Buttons -->
    <div class="px-2">
      <div class="flex justify-between items-center">
        <div class="mr-2 md:mr-4">
          <a href="https://cart.thunderheadeng.com/cgi-bin/UCEditor?merchantId=THENG" title="Shopping Cart">
            <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 md:h-8 md:w-8 text-gray-500"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </a>
        </div>
        <div>
          <a href="https://cart.thunderheadeng.com/cgi-bin/UCMyAccount" title="My Account">
            <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 md:h-8 md:w-8 text-gray-500"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Button-->
    <div class="md:hidden">
      <button type="button" on:click={() => openMenu = 'mobile'}
        class="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teci-blue-light"
        aria-expanded="{openMenu == 'mobile'}">
        <span class="sr-only">Open mobile menu</span>
        <!-- Heroicon name: outline/menu -->
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on mobile menu state.-->
  {#if openMenu == 'mobile'}
  <div class="absolute z-30 top-0 inset-x-0 md:hidden shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
    use:clickOutside on:outclick={() => (openMenu = '')}
    in:slide={{ duration: 250, easing: cubicOut }}
    out:slide={{ duration: 150, easing: cubicIn }}
  >
    <div class="pt-5 pb-6 px-4 sm:pb-8">
      <div class="flex items-center justify-between">
        <a class="block" href="https://www.thunderheadeng.com">
          <img class="h-10 w-auto" src="https://files.thunderheadeng.com/support/images/te_logo.svg"
            alt="Thunderhead Engineering" />
        </a>
        
        <button type="button" on:click={() => openMenu = ''}
          class="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teci-blue-light">
          <span class="sr-only">Close menu</span>
          <!-- Heroicon name: outline/x -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div on:click={() => openMenu = ''} class="mt-6 sm:mt-8">
        <nav>
          <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
            <a href="/product" class="-m-3 flex items-center p-3 hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-teci-blue-light text-white sm:h-12 sm:w-12">
                <!-- Heroicon name: outline/collection -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">Products</div>
            </a>
            <a href="https://support.thunderheadeng.com" class="-m-3 flex items-center p-3 hover:bg-gray-50">
              <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-teci-blue-light text-white sm:h-12 sm:w-12">
                <!-- Heroicon name: outline/support -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">Support</div>
            </a>
            <a href="https://www.thunderheadeng.com/training/" class="-m-3 flex items-center p-3 hover:bg-gray-50">
              <div
                class="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-teci-blue-light text-white sm:h-12 sm:w-12">
                <!-- Heroicon name: outline/calendar -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">Training</div>
            </a>
            <a href="https://www.femtc.com/" class="-m-3 flex items-center p-3 hover:bg-gray-50">
              <div
                class="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-teci-blue-light text-white sm:h-12 sm:w-12">
                <!-- Heroicon name: outline/speakerphone -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">FEMTC</div>
            </a>
            <a href="https://www.thunderheadeng.com/about/" class="-m-3 flex items-center p-3 hover:bg-gray-50">
              <div
                class="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-teci-blue-light text-white sm:h-12 sm:w-12">
                <!-- Heroicon name: outline/emoji-happy -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">Company</div>
            </a>
          </div>
        </nav>
      </div>
    </div>
    <div on:click={() => openMenu = ''} class="py-6 px-5">
      <div class="grid grid-cols-2 gap-4">
        <a href="https://www.thunderheadeng.com/news/" class="text-base font-medium text-gray-900 hover:text-gray-700">
          News
        </a>
        <a href="https://support.thunderheadeng.com/release-notes/" class="text-base font-medium text-gray-900 hover:text-gray-700">
          Release Notes
        </a>
        <a href="https://store2.thunderheadeng.com/cart/" class="text-base font-medium text-gray-900 hover:text-gray-700">
          Order Online
        </a>
        <a href="https://store2.thunderheadeng.com/trial/" class="text-base font-medium text-gray-900 hover:text-gray-700">
          30-day Trial
        </a>
        <a href="mailto:sales@thunderheadeng.com" class="text-base font-medium text-gray-900 hover:text-gray-700 flex flex-row items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block pr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg> Sales
        </a>
        <a href="mailto:support@thunderheadeng.com" class="text-base font-medium text-gray-900 hover:text-gray-700 flex flex-row items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block pr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg> Support
        </a>
      </div>
    </div>
  </div>
  {/if}
</header>