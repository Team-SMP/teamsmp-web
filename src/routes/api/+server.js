// @ts-nocheck
import {json} from "@sveltejs/kit";

export const GET = async () => {
    return json({
        "hi": "Welcome, traveller!",
        "version": "arcanum v1.0"
    });
}
