// // import { NextResponse } from "next/server";

// // // Handles GET requests to /api
// // export async function GET(request: Request) {
// //     // ...
// //     return NextResponse.json({ message: "Hello World" });
// // }


// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://fatimamalik1642:YN4Lu48GfDqzoKhn@inventory.ffpmeva.mongodb.net/?retryWrites=true&w=majority&appName=inventory";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    const uri = "mongodb+srv://fatimamalik1642:YN4Lu48GfDqzoKhn@inventory.ffpmeva.mongodb.net/?retryWrites=true&w=majority&appName=inventory";

    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('inventory-system');
        const inventory = db.collection('inventory');
        const query = {};
        const products = await inventory.find(query).toArray();
        console.log(products);
        return NextResponse.json({"a":23, products})
    } finally {
        await client.close();
    }
}