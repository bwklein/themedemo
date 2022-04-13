<script context="module">
	//Protect the 'admin' routes.
  export async function load({ fetch, url, session }) {
    if (url.pathname.startsWith('/admin') && !session.user) {
      console.log("Protected");
      return { 
        status: 302,
        redirect: "/",
        props: {
          config:{}
        }
      };
    } else {
      const configFile = '/site_config.json';
      const response = await fetch(configFile);

      return {
        status: response.status,
        props: {
          config: await response.json()
        }
      };
    }

    
  }
</script>

<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
  import Banner from "$lib/components/Banner.svelte";

  export let config;
</script>

<Header />

{#if config.showBanner }
<Banner {...config.bannerData} />
{/if}

<main class="relative w-full flex-grow flex flex-col box-border py-12 px-4 sm:px-6 lg:px-8 my-0 mx-auto max-w-7xl">
	<slot />
</main>

<Footer />
