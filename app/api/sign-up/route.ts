import { NextRequest, NextResponse } from "next/server";
import { LoopsClient } from "loops";

export async function POST(request: Request) {
    const { body } = request;
    try {
        console.log(body)
        const response = await fetch('https://app.loops.so/api/v1/api-key', {
            headers: {
                'Authorization': `Bearer ${process.env.LOOPS_API}`
            },
        });
        const data = JSON.stringify(response);
        console.log(data);
        return new Response(data, {status: 200});
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unexpected error'
        return new Response(message, {status: 500})
    }
}