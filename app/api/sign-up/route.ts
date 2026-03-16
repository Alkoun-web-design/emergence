import { NextRequest, NextResponse } from "next/server";
import { LoopsClient } from "loops";

const loops = new LoopsClient(process.env.LOOPS_API_KEY as string);

export async function POST(request: NextRequest) {
    const { body } = request;


    const res = await request.json();
    
    const email = res["email"];
    
    // Note: updateContact() will create or update a contact
    
    const resp: {
      success: boolean;
      id?: string;
      message?: string;
    } = await loops.updateContact(email);

    try {
        console.log(body)
        const response = await fetch('https://app.loops.so/api/v1/api-key', {
            headers: {
                'Authorization': `Bearer ${process.env.LOOPS_API}`
            },
        });
        const data = JSON.stringify(response);
        console.log(data);
        return NextResponse.json({ success: resp.success, data, status: 200 });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unexpected error'
        return NextResponse.json({message, status: 500})
    }
}