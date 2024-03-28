


import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, query: { id } } = req;

    const uri = "mongodb+srv://fatimamalik1642:YN4Lu48GfDqzoKhn@inventory.ffpmeva.mongodb.net/?retryWrites=true&w=majority&appName=inventory";

    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('inventory-system');
        const inventory = db.collection('inventory');

        switch (method) {
            case 'PUT':
                const { name, manufacturer, quantity, quantitysold, price, store } = req.body;
                const updatedProduct = { name, manufacturer, quantity, quantitysold, price, store };
                await inventory.updateOne({ _id: new ObjectId(id as string) }, { $set: updatedProduct });
                return res.json({ message: 'Product updated successfully' });

            case 'DELETE':
                await inventory.deleteOne({ _id: new ObjectId(id as string) });
                return res.json({ message: 'Product deleted successfully' });

            default:
                res.setHeader('Allow', ['PUT', 'DELETE']);
                return res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        await client.close();
    }
}


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
        return NextResponse.json({ products })
    } finally {
        await client.close();
    }
}

export async function POST(request: Request) {
    try {
        let body = await request.json();
        const uri = "mongodb+srv://fatimamalik1642:YN4Lu48GfDqzoKhn@inventory.ffpmeva.mongodb.net/?retryWrites=true&w=majority&appName=inventory";

        const client = new MongoClient(uri);
        await client.connect();

        const db = client.db('inventory-system');
        const inventory = db.collection('inventory');

        const product = await inventory.insertOne({ ...body });
        await client.close();

        return NextResponse.json({ product, ok: true });
    } catch (error) {
        console.error("Error adding product:", error);
    }
}
