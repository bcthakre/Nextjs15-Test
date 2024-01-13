import { headers } from "../../../next.config";
import { comments } from "./data";

export async function GET() {
    return new Response(JSON.stringify(comments), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}


// export async function POST(request) {

//     const commment = await request.json();
//     const newComment = {
//         id: comments.length + 1,
//         text: commment.text
//     }
//     comments.push(newComment);
//     return new Response(JSON.stringify(newComment), {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         status: 201
//     });
// }

let comments = []; // Assuming comments is a mutable array

export async function POST(request) {
    try {
        const commment = await request.json();

        // Validate the incoming data
        if (!commment || !commment.text) {
            return new Response(JSON.stringify({ error: 'Invalid input' }), {
                headers: { 'Content-Type': 'application/json' },
                status: 400 // Bad Request
            });
        }

        const newComment = {
            id: comments.length + 1,
            text: commment.text
        };
        comments.push(newComment);

        return new Response(JSON.stringify(newComment), {
            headers: { 'Content-Type': 'application/json' },
            status: 201 // Created
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
