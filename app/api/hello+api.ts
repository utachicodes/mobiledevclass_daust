export async function GET(request: Request) {
    return Response.json({
        message: "Hello from Expo Router API Routes!",
        timestamp: new Date().toISOString(),
        tip: "You can use this for server-side logic, webhooks, or simple proxies."
    });
}
