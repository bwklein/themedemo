<script>
	//Based on:
	//https://tailwindui.com/components/marketing/sections/feature-sections#component-c683653471044e6ffc32739e199dfbf2
	//https://tailwindui.com/components/marketing/sections/team-sections#component-0efa5ebc92e2aa72bc2332fcf5578869
  //Allows icons from https://fonts.google.com/icons?selected=Material+Icons by name in the format 'icon-XXXX'.

	import Icon from '$lib/components/Icon.svelte';

	export let title = 'A better way to do things.';

	export let data = [
		{
			icon: 'pyrosim',
      classes: 'h-12 w-12',
			image: 'https://www.thunderheadeng.com/wp-content/uploads/2013/09/company_pyrosim.jpg',
			heading: 'Product 1',
			subheading: 'Nutshell',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultrices, vestibulum lacus nec, interdum est. Ut.',
			linkURL: '/product'
		},
		{
			icon: '',
      classes: '',
			image: 'https://www.thunderheadeng.com/wp-content/uploads/2013/08/company_pathfinder.png',
			heading: 'Product 2',
			subheading: 'No Icon',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultrices, vestibulum lacus nec, interdum est. Ut.',
			linkURL: '/product'
		},
		{
			icon: 'icon-auto_stories',
			image: 'https://www.thunderheadeng.com/wp-content/uploads/2013/08/company_petrasim.png',
      classes: 'bg-teci-blue-dark text-white text-4xl grid place-items-center h-12 w-12',
			heading: 'Google Icon, No Subtitle or Text',
			subheading: '',
			text: '',
			linkURL: '/product'
		}
	];
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="w-full mx-auto">
	<h2 class="sr-only">{title}</h2>
	<dl class="space-y-10 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 md:grid-cols-3">
		{#each data as col}
			<div>
				<a href={col.linkURL}>
					<div class="space-y-4">
            {#if col.image}
						<div class="w-full aspect-square bg-slate-100">
							<img class="w-full aspect-square object-cover shadow-md border border-gray-200" src={col.image} title={col.heading} alt={col.heading} />
						</div>
            {/if}
						<div class="flex flex-row items-start space-x-4">
              {#if col.icon}
              <div class="grid place-items-center">
                <Icon classes={col.classes} icon={col.icon} />
              </div>
              {/if}
							<div class="leading-none font-medium flex flex-col">
								<h3 class="text-2xl leading-none">{col.heading}</h3>
                {#if col.subheading}
								<p class="text-teci-blue-dark leading-6">{col.subheading}</p>
                {/if}
							</div>
						</div>
            {#if col.text}
            <div class="text-lg">
							<p class="text-gray-500">{col.text}</p>
						</div>
            {/if}
					</div>
				</a>
			</div>
		{/each}
	</dl>
</div>
