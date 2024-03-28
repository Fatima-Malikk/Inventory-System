"use client"

import React from 'react'
import { useState, useEffect } from "react";

 
const AddProduct = () => {
     const [product, setProduct] = useState({
    name: "",
    manufacturer: "",
         description: "",
         quantity: "",
         store: "",
       purchasedate: "",
       salesdate: "",
       quantitysold: "",
    price:""
  });

  const addProduct = async () => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        console.log("Product added successfully");
        // Clear input fields after successful addition
        setProduct({
          name: "",
          manufacturer: "",
            description: "",
          quantity: "",
          store: "",
          purchasedate: "",
       salesdate: "",
       quantitysold: "",
    price:""
        });
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product", error);
    }
  };


  const  [productList,  setProductList]  =useState([])  

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch('/api/products')
            let rjson = await response.json()
            setProductList(rjson.productList)
        }
        fetchProduct()
    }, [])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

    return (
      <><div className="container mx-auto px-5 py-4">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"> Add Products</h1>
        </div>
        {/* Input fields for adding new product */}
        <div className="mb-4 flex flex-wrap gap-4">
          <div className="flex-grow">
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2" />
          </div>
          <div className="flex-grow">
            <input
              type="text"
              name="manufacturer"
              value={product.manufacturer}
              onChange={handleChange}
              placeholder="Manufacturer"
              className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2" />
          </div>
        </div>
        <div className="mb-4 flex flex-wrap gap-4">
          <div className="flex-grow">
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Description"
              className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
            ></textarea>
          </div>
          <div className="flex-grow">
            <textarea
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
            ></textarea>
          </div>
        </div>
        <div className="mb-4 flex flex-wrap gap-4">
          <div className="flex-grow">
            <textarea
              name="store"
              value={product.store}
              onChange={handleChange}
              placeholder="Store"
              className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
            ></textarea>
          </div>
          <div className="flex-grow">
            <textarea
              name="purchasedate"
              value={product.purchasedate}
              onChange={handleChange}
              placeholder="Purchasing Date  (dd/mm/yyyy)"
              className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
            ></textarea>
          </div>
        </div>
         <div className="mb-4 flex flex-wrap gap-4">
          <div className="flex-grow">
            <textarea
              name="salesdate"
              value={product.salesdate}
              onChange={handleChange}
              placeholder="Sales Date (dd/mm/yyyy)"
              className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
            ></textarea>
          </div>
          <div className="flex-grow">
            <textarea
              name="quantitysold"
              value={product.quantitysold}
              onChange={handleChange}
              placeholder="Quantity Sold"
              className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
            ></textarea>
          </div>
          <div className="flex-grow">
            <textarea
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Total Sale Amount"
              className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
            ></textarea>
          </div>
        </div>
        
        <button onClick={addProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Product
        </button>
      </div>
      </>

  )
}

export default AddProduct