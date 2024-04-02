async function getLatestRelease() {
    try {
        const response = await fetch('https://launchermeta.mojang.com/mc/game/version_manifest_v2.json');
        const data = await response.json();

        // Extract the value of latest.release
        const latestRelease = data.latest.release;

        return latestRelease;
    } catch (error) {
        console.error('Error fetching latest release:', error);
        throw error;
    }
}

