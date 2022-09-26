import { serve } from "https://deno.land/std@0.157.0/http/server.ts";
import cors from "https://deno.land/x/edge_cors/src/cors.ts";

serve(async req => {
    const request = await fetch('https://api.npoint.io/8be2c43656eaf1235cd1');
    const profile = await request.json();
    return cors(req, Response.json(profile));
});
