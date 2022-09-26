import { serve } from "https://deno.land/std@0.157.0/http/server.ts";
import cors from "https://deno.land/x/edge_cors/src/cors.ts";

let profile = {};

serve(req => {
    if (req.method === 'POST') {
        return req.json().then(data => {
            profile = data;
            return Response.json(profile);
        });
    } else {
        return cors(req, Response.json(profile));
    }
});
