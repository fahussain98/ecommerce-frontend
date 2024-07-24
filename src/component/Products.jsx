import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/product");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
      }
    };

    fetchProducts();
  }, []);

  const deleteFun = async (_id) => {
    try {
      await axios.delete(`http://localhost:4000/delete/${_id}`);
      setProducts(products.filter((product) => product._id !== _id));
      console.log("Product successfully deleted");
      navigate("/HOME");
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Category: {product.category}</p>
                  <p className="card-text">Company: {product.company}</p>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteFun(product._id)}
                  >
                    DELETE
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                    UPDATE
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found</p>
        )}
      </div>
    </div>
  );
}

export default Products;
