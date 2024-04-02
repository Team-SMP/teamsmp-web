import { statusJava } from 'node-mcstatus';
import { json } from '@sveltejs/kit';

const host = 'teamsmp.spdns.eu';
const port = 33221;
const options = { query: true };

export const GET = async () => {
    try {
        const result = await statusJava(host, port, options);
        return json({ status: 200, body: result });
    } catch (error) {
        return json({ status: 500, body: { error: 'Failed to fetch Minecraft server status' } });
    }
};
