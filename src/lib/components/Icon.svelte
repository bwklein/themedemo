<script>
  // Allows icons from https://fonts.google.com/icons?selected=Material+Icons by name in the format 'icon-XXXX'.
	export let icon;
	export let classes;
</script>

{#if icon == 'pyrosim'}
<span class="not-prose">
  <img
    class={classes}
    src="https://files.thunderheadeng.com/www/images/pyrosim_icon.svg"
    alt="PyroSim"
    title="PyroSim Icon"
  />
</span>
{:else if icon == 'pyrosim-results'}
<span class="not-prose">
  <img
    class={classes}
    src="https://files.thunderheadeng.com/www/images/pyrosim-results_icon.svg"
    alt="PyroSim Results"
    title="PyroSim Results Icon"
  />
</span>
{:else if icon == 'pathfinder'}
<span class="not-prose">
  <img
    class={classes}
    src="https://files.thunderheadeng.com/www/images/pathfinder_icon.svg"
    alt="Pathfinder"
    title="Pathfinder Icon"
  />
</span>
{:else if icon == 'pathfinder-results'}
<span class="not-prose">
  <img
    class={classes}
    src="https://files.thunderheadeng.com/www/images/pathfinder-results_icon.svg"
    alt="Pathfinder Results"
    title="Pathfinder Results Icon"
  />
</span>
{:else if icon == 'petrasim'}
<span class="not-prose">
	<img
		class={classes}
		src="https://files.thunderheadeng.com/www/images/petrasim_icon.svg"
		alt="PetraSim"
    title="PetraSim Icon"
	/>
</span>
{:else if icon?.startsWith("icon-")}
<span class="material-icons-outlined {classes}">{icon?.slice(5)}</span>
{:else}
<span class="not-prose">
	<svg class={classes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
		<path
			style="fill:#0c3879;fill-rule:evenodd;stroke:none"
			d="M88.113 220.536h97.672v97.672H88.113z"
			transform="matrix(2.5596 0 0 2.5596 -225.533 -564.483)"
		/>
		<path
			style="fill:#fff;fill-rule:evenodd;stroke:none"
			d="M145.864 260.176h22.042c2.792 0 4.883.835 6.559 2.651 1.532 1.673 2.232 3.764 2.232 6.278 0 2.37-.7 4.464-2.232 6.277-1.676 1.675-3.767 2.651-6.559 2.651h-22.042v-17.857m0 23.159h22.042c2.792 0 4.883.838 6.559 2.65 1.532 1.674 2.232 3.768 2.232 6.278 0 2.373-.7 4.464-2.232 6.278-1.676 1.675-3.767 2.65-6.559 2.65h-22.042v-17.856"
			transform="matrix(2.5596 0 0 2.5596 -225.533 -564.483)"
		/>
		<path
			style="fill:#fff;fill-rule:evenodd;stroke:none"
			d="M132.471 301.192c-5.861 0-8.79-3.07-8.79-8.929l-.138-37.389-20.648-.14c-7.116-1.254-10.185-9.626-5.165-15.206 1.535-1.535 3.63-2.373 6.14-2.651h26.926l1.675.14h35.435c2.792 0 4.883.836 6.559 2.649 1.532 1.675 2.232 3.767 2.232 6.28 0 2.37-.7 4.464-2.232 6.277-1.676 1.673-3.767 2.651-6.559 2.651H141.26V301.192h-8.788"
			transform="matrix(2.5596 0 0 2.5596 -225.533 -564.483)"
		/>
	</svg>
</span>
{/if}