import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser(result) {
  const [products, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setProduct(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Wholesale Price</th>
              <th scope="col">Retail Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{product.productName}</td>
                <td>{product.wholesalePrice}</td>
                <td>{product.retailPrice}</td>
                <td>{product.quantity}</td>
                <td>
                  {/* <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${product.id}`}
                  >
                    View
                  </Link> */}
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editproduct/${product.id}`}
                  >
                    Edit
                  </Link>
                  {/* <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}