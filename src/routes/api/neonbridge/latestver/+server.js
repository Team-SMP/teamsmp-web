import { json } from '@sveltejs/kit';

export const GET = async function getLatestRelease() {
	try {
		const response = await fetch('https://launchermeta.mojang.com/mc/game/version_manifest_v2.json');
		const data = await response.json();

		// Extract the value of latest.release
		const latestRelease = data.latest.release;

		// Return the latest release as JSON
		return json(latestRelease);
	} catch (error) {
		console.error('Error fetching latest release:', error);
		throw error;
	}
}