import { NextResponse } from "next/server";
import{ MongoClient } from "mongodb";

// Handles GET requests to /api
export async function GET(request: Request) {
    // ...
    return NextResponse.json({ "Hello World": 20 });
    
//     const uri = "mongodb+srv://fatimamalik1642:YN4Lu48GfDqzoKhn@inventory.ffpmeva.mongodb.net/";
//     const client = new MongoClient(uri);
//     async function run() {
//         try {
//             const database = client.db("inventory");
//             const collection = database.collection("inventory");


//         }
// }
}