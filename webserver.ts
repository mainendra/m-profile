import { serve } from "https://deno.land/std@0.157.0/http/server.ts";

let profile = {};

serve(req => {
    if (req.method === 'POST') {
        return req.json().then(data => {
            profile = data;
            return Response.json(profile);
        });
    } else {
        return Response.json(profile);
    }
});
