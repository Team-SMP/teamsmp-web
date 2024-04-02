// @ts-nocheck
import {json} from "@sveltejs/kit";

export const GET = async () => {
    return json({
        "hi": "This API is a work-in-progress. Please wait for arcanum v1.1 before using the neonbridge endpoint.",
        "status": "wip"
    });
}
