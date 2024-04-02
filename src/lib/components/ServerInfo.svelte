<script lang="js">
    import { onMount } from 'svelte';

    let serverStatus = null; // Define a default value for serverStatus

    onMount(async () => {
        try {
            const response = await fetch(`/api/neonbridge/status`);
            if (response.ok) {
                serverStatus = await response.json();
            } else {
                console.error("Error fetching server status:", response.statusText);
                // Optionally handle errors, e.g., display a message to the user
            }
        } catch (error) {
            console.error("Error fetching server status:", error);
            // Optionally handle errors, e.g., display a message to the user
        }
    });

    let latestRelease = null;

    async function fetchLatestRelease() {
        try {
            const response = await fetch('https://launchermeta.mojang.com/mc/game/version_manifest_v2.json');
            const data = await response.json();
            latestRelease = data.latest.release;
        } catch (error) {
            console.error('Error fetching latest release:', error);
            throw error;
        }
    }

    onMount(fetchLatestRelease);

</script>

<div class="bg-gray-300 dark:bg-slate-900 p-5 rounded-xl shadow-md hover:shadow-lg shadow-gray-400 hover:shadow-gray-400 dark:shadow-slate-950 dark:hover:shadow-slate-950 transition-shadow flex flex-col justify-start max-w-80 my-3 text-lg">
    {#if serverStatus !== null && serverStatus.body}
        {#if serverStatus.body.online === true}
            <h2 class="text-4xl">Server Status</h2>
            <div class="flex items-center text-xl">
                <div class="bg-emerald-600 w-4 h-4 rounded-full mr-2"></div>
                <p class="font-black text-emerald-600">Online</p>
            </div>
            <p>Players Online: <b>{serverStatus.body.players.online !== 0 ? serverStatus.body.players.online : "None"}</b></p>
            <p>Minecraft Java 1.19.3-{latestRelease}</p>
        {:else}
            <h2 class="text-4xl">Server Status</h2>
            <div class="flex items-center">
                <div class="bg-rose-600 w-4 h-4 rounded-full mr-2"></div>
                <p class="font-black text-rose-600">Offline</p>
            </div>
        {/if}
    {:else}
        <h2 class="text-4xl">Server Status</h2>
        <p class="italic">Not available...</p>
    {/if}
</div>