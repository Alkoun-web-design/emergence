import { NextRequest, NextResponse } from "next/server";
import { LoopsClient } from "loops";

//POST https://app.loops.so/api/v1/transactional

export async function POST(request: NextRequest) {
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
        return new NextResponse(data, {status: 200});
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unexpected error'
        return new NextResponse(message, {status: 500})
    }
}