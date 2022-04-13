<script>
    import { session } from '$app/stores'
    export const token = $session.token
    export let login = false;
  
    let d = new Date();
  
    async function signOut() {
     const response = await fetch('/auth/logout', {
       method: 'GET',
       headers: {
         'content-type': 'application/json'
       }
     })
     if (response.ok) {
       visibleProfile = !visibleProfile;
       window.location.href = '/'
     } else {
       alert(await response.text())
     }
    }
  </script>
  
  <footer id="bottom" class="bg-gray-800" aria-labelledby="footerHeading">
    <h2 id="footerHeading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Products
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a href="https://www.thunderheadeng.com/pyrosim/" class="text-base text-gray-300 hover:text-white">
                    PyroSim
                  </a>
                </li>
                <li>
                  <a href="https://www.thunderheadeng.com/pathfinder/" class="text-base text-gray-300 hover:text-white">
                    Pathfinder
                  </a>
                </li>
                <li>
                  <a href="https://www.thunderheadeng.com/petrasim/" class="text-base text-gray-300 hover:text-white">
                    PetraSim
                  </a>
                </li>
                <li>
                  <a href="https://www.thunderheadeng.com/" class="text-base text-gray-300 hover:text-white">
                    Other Tools
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Support
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a href="https://support.thunderheadeng.com/docs/" class="text-base text-gray-300 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="https://support.thunderheadeng.com/tutorials/" class="text-base text-gray-300 hover:text-white">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="https://support.thunderheadeng.com/release-notes/" class="text-base text-gray-300 hover:text-white">
                    Release Notes
                  </a>
                </li>
                <li>
                  <a href="https://support.thunderheadeng.com/answers/" class="text-base text-gray-300 hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Events
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a href="https://www.thunderheadeng.com/training/" class="text-base text-gray-300 hover:text-white">
                    Calendar
                  </a>
                </li>
                <li>
                  <a href="https://www.femtc.com/" class="text-base text-gray-300 hover:text-white">
                    FEMTC
                  </a>
                </li>
                <li>
                  <a href="https://www.thunderheadeng.com/training/" class="text-base text-gray-300 hover:text-white">
                    Training
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Company
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a href="https://www.thunderheadeng.com/about/" class="text-base text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://www.thunderheadeng.com/news/" class="text-base text-gray-300 hover:text-white">
                    News
                  </a>
                </li>
                <li>
                  <a href="https://www.thunderheadeng.com/job-openings/" class="text-base text-gray-300 hover:text-white">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="https://www.thunderheadeng.com/pyrosim/pyrosim-licensing/#distributors" class="text-base text-gray-300 hover:text-white">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-8 xl:mt-0 flex flex-col justify-between md:items-end">
          <h3 class="text-right text-sm font-semibold text-gray-500 tracking-wider uppercase">
            Subscribe to Updates
          </h3>
          <p class="text-right mt-4 text-gray-300 text-base xxl:text-lg leading-6">
            Receive information about new software releases, tutorials and major announcements.
          </p>
          <data id="mj-w-res-data" data-token="c59142d82197a4f86bc30e8fa80e1ea8" class="mj-w-data" data-apikey="3aOX" 
            data-w-id="Fbu" data-lang="en_US" data-base="https://app.mailjet.com" data-width="640" data-height="480" 
            data-statics="statics"></data>
          <div class="mj-w-button mj-w-btn mt-4 w-full md:max-w-xs" data-token="c59142d82197a4f86bc30e8fa80e1ea8">
            <div class="mj-w-button-content w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-white hover:bg-teci-blue-dark bg-teci-blue-light focus:outline-none focus:border-teci-blue-dark transition duration-150 ease-in-out">
              Sign Up
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
        <div class="flex space-x-6 md:order-3">
          <a href="https://www.linkedin.com/company/thunderheadeng" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          <a href="https://www.facebook.com/thunderheadeng" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Facebook</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </a>
  
          <a href="https://twitter.com/thunderheadeng" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </div>
        <p class="mt-8 text-sm text-gray-500 md:mt-0 md:order-1">
          &copy; 1998 - { d.getFullYear() } Thunderhead Engineering, All rights reserved.
        </p>
        {#if login}
        <div class="mt-4 md:mt-0 md:order-2">
          {#if token}
          <button on:click|preventDefault={signOut} class="w-40 mx-auto flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-white hover:bg-teci-blue-light bg-teci-blue-dark focus:outline-none focus:border-teci-blue-dark transition duration-150 ease-in-out">Staff Log out</button>
          {:else}
          <a href="/auth/login" class="w-40 mx-auto flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-white hover:bg-teci-blue-light bg-teci-blue-dark focus:outline-none focus:border-teci-blue-dark transition duration-150 ease-in-out">Staff Sign In</a>
          {/if}
        </div>
        {/if}
      </div>
    </div>
  </footer>