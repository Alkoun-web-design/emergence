export default async function GET() {
    try {
        const response = await fetch('https://app.loops.so/api/v1/api-key', {
            headers: {
                'Authorization': `Bearer ${process.env.LOOPS_API}`
            }
        });
        const data = await response.json();
        console.log(data);
        return new Response(data);
    } catch (error) {
        console.log(error);
        return new Response()
    }
}