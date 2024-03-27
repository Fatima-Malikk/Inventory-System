import { request } from 'https';
import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const uri ="mongodb+srv://fatimamalik1642:YN4Lu48GfDqzoKhn@inventory.ffpmeva.mongodb.net/"
    const client = new MongoClient(uri);
    try {
        const db = client.db('inventory-system');
        const inventory = db.collection('inventory');
        const query = {};
        const products = await inventory.find(query).toArray;
        return NextResponse.json(products);
    }
    finally{
    await client.close();
    
    }
}

export async function POST(request: Request) {
    let body = request.body;
    const uri ="mongodb+srv://fatimamalik1642:YN4Lu48GfDqzoKhn@inventory.ffpmeva.mongodb.net/"
    const client = new MongoClient(uri);
    try {
        const db = client.db('inventory-system');
        const inventory = db.collection('inventory');
        const product = await inventory.insertOne({ ...body });
        return NextResponse.json({ product, ok: true });
    }
    finally{
    await client.close();
    
    }
}