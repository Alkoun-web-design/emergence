export default async function POST(request: Request) {
    const { body } = request;
    try {
        console.log(body)
        const response = await fetch('https://app.loops.so/api/v1/api-key', {
            headers: {
                'Authorization': `Bearer ${process.env.LOOPS_API}`
            },
        });
        const data = await response.json();
        console.log(data);
        return new Response(data, {status: 204});
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unexpected error'
        return new Response(message, {status: 500})
    }
}