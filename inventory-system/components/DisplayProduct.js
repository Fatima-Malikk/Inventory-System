// // import React, { useState, useEffect } from 'react';

// // const DisplayProduct = () => {
// //     const [productList, setProductList] = useState([]);

// //     useEffect(() => {
// //         const fetchProduct = async () => {
// //             try {
// //                 const response = await fetch('/api/products');
// //                 const data = await response.json();
// //                 setProductList(data.products);
// //             } catch (error) {
// //                 console.error('Error fetching products:', error);
// //             }
// //         };
// //         fetchProduct();
// //     }, []);

  

// //     return (
// //             <div className="container px-5 py-24 mx-auto">
// //                 <div className="flex flex-col text-center w-full mb-20">
// //                     <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Products</h1>
// //                 </div>
// //                 <div className="lg:w-4/3 w-full mx-auto overflow-auto">
// //                     <table className="table-auto w-full text-left whitespace-no-wrap">
// //                         <thead>
// //                             <tr>
// //                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Product</th>
// //                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Manufacturer</th>
// //                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Remaining Quantity</th>
// //                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Sold Quantity</th>
// //                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Total Amount</th>
// //                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Store</th>
// //                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Actions</th>
                                
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {productList.map(product => (
// //                                 <tr key={product._id}>
// //                                     <td className="px-4 py-3">{product.name}</td>
// //                                     <td className="px-4 py-3">{product.manufacturer}</td>
// //                                     <td className="px-4 py-3">{product.quantity}</td>
// //                                     <td className="px-4 py-3">{product.quantitysold}</td>
// //                                     <td className="px-4 py-3">{product.price}</td>
// //                                     <td className="px-4 py-3">{product.store}</td>
// //                                     <td className="px-4 py-3">
// //                                         <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"onClick={() => handleUpdate(product._id, { name: 'Updated Product' })}>Update</button>
// //     <button class="flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"onClick={() => handleDelete(product._id)}>Delete</button>
    
// //                                       </td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 </div>
// //             </div>
// //     );
// // }

// // export default DisplayProduct;



// import React, { useState, useEffect } from 'react';

// const DisplayProduct = () => {
//     const [productList, setProductList] = useState([]);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const response = await fetch('/api/products');
//                 const data = await response.json();
//                 setProductList(data.products);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };
//         fetchProduct();
//     }, []);

//     const handleUpdate = async (productId, updatedProduct) => {
//         try {
//             const response = await fetch(`/api/products/${productId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(updatedProduct),
//             });
//             if (response.ok) {
//                 console.log('Product updated successfully');
//                 // Update the product list after successful update
//                 const updatedList = productList.map(product => {
//                     if (product._id === productId) {
//                         return { ...product, ...updatedProduct };
//                     } else {
//                         return product;
//                     }
//                 });
//                 setProductList(updatedList);
//             } else {
//                 console.error('Failed to update product:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error updating product:', error);
//         }
//     };

//     const handleDelete = async (productId) => {
//         try {
//             const response = await fetch(`/api/products/${productId}`, {
//                 method: 'DELETE',
//             });
//             if (response.ok) {
//                 console.log('Product deleted successfully');
//                 // Remove the deleted product from the product list
//                 const updatedList = productList.filter(product => product._id !== productId);
//                 setProductList(updatedList);
//             } else {
//                 console.error('Failed to delete product:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error deleting product:', error);
//         }
//     };

//     return (
//             <div className="container px-5 py-24 mx-auto">
//                 <div className="flex flex-col text-center w-full mb-20">
//                     <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Products</h1>
//                 </div>
//                 <div className="lg:w-4/3 w-full mx-auto overflow-auto">
//                     <table className="table-auto w-full text-left whitespace-no-wrap">
//                         <thead>
//                             <tr>
//                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Product</th>
//                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Manufacturer</th>
//                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Remaining Quantity</th>
//                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Sold Quantity</th>
//                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Total Amount</th>
//                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Store</th>
//                                 <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {productList.map(product => (
//                                 <tr key={product._id}>
//                                     <td className="px-4 py-3">{product.name}</td>
//                                     <td className="px-4 py-3">{product.manufacturer}</td>
//                                     <td className="px-4 py-3">{product.quantity}</td>
//                                     <td className="px-4 py-3">{product.quantitysold}</td>
//                                     <td className="px-4 py-3">{product.price}</td>
//                                     <td className="px-4 py-3">{product.store}</td>
//                                     <td className="px-4 py-3">
//                                         <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleUpdate(product._id, { name: 'Updated Product' })}>Update</button>
//                                         <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(product._id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//     );
// }

// export default DisplayProduct;



import React, { useState, useEffect } from 'react';

const DisplayProduct = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProductList(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProduct();
    }, []);

    const handleUpdate = async (productId, updatedProduct) => {
        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });
            if (response.ok) {
                console.log('Product updated successfully');
                // Update the product list after successful update
                const updatedList = productList.map(product => {
                    if (product._id === productId) {
                        return { ...product, ...updatedProduct };
                    } else {
                        return product;
                    }
                });
                setProductList(updatedList);
            } else {
                console.error('Failed to update product:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('Product deleted successfully');
                // Remove the deleted product from the product list
                const updatedList = productList.filter(product => product._id !== productId);
                setProductList(updatedList);
            } else {
                console.error('Failed to delete product:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Products</h1>
            </div>
            <div className="lg:w-4/3 w-full mx-auto overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Product</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Manufacturer</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Remaining Quantity</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Sold Quantity</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Total Amount</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Store</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map(product => (
                            <tr key={product._id}>
                                <td className="px-4 py-3">{product.name}</td>
                                <td className="px-4 py-3">{product.manufacturer}</td>
                                <td className="px-4 py-3">{product.quantity}</td>
                                <td className="px-4 py-3">{product.quantitysold}</td>
                                <td className="px-4 py-3">{product.price}</td>
                                <td className="px-4 py-3">{product.store}</td>
                                <td className="px-4 py-3">
                                    <button onClick={() => handleUpdate(product._id, { name: 'Updated Product' })} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Update</button>
                                    <button onClick={() => handleDelete(product._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DisplayProduct;
