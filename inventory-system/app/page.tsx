"use Client"
import Header from "./../components/Header";
import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState({
    name: "",
    manufacturer: "",
    description: ""
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
          description: ""
        });
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-5 py-4">
        {/* Input fields for adding new product */}
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
          />
          <input
            type="text"
            name="manufacturer"
            value={product.manufacturer}
            onChange={handleChange}
            placeholder="Manufacturer"
            className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
          />
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
          ></textarea>
          <button onClick={addProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}
