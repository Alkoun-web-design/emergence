import { NextRequest, NextResponse } from "next/server";
// import { LoopsClient } from "loops"
import sendEmail from '@/lib/sendEmail'

// const loops = new LoopsClient(process.env.LOOPS_API_KEY as string);

export async function POST(request: NextRequest) {
    const { body } = await request.json();
    
    // update contact 

    try {
        console.log(body)
        // const response = await fetch('https://app.loops.so/api/v1/api-key', {
        //     headers: {
        //         'Authorization': `Bearer ${process.env.LOOPS_API}`
        //     },
        // });
        // const data = JSON.stringify(response);
        // console.log(data);

        const transactionalId = '1234576' 
        sendEmail(body.email, transactionalId);
        
        return NextResponse.json({ success: true, data:body , status: 200 });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unexpected error'
        return new NextResponse(message, {status: 500})
    }
}