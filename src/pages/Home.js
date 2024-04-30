import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import SearchResult from "../products/SearchResult";

export default function Home() {
  let navigate = useNavigate();
  
  const [users, setUsers] = useState([]);
  const [products, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8080/products");
    setProduct(result.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/product/${id}`);
    loadProducts();
  };

  const [query, setQuery] = useState({
    text: "",
    upper: "",
  });

  const { text, upper } = query;

  const onInputChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.get(`http://localhost:8080/product/${upper}/${text}`);
    setProduct(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Search by Name"
                    name="text"
                    value={text}
                    onChange={(e) => onInputChange(e)}
                />
                <input
                    type={"number"}
                    className="form-control"
                    placeholder="Retail Price Upper Limit"
                    name="upper"
                    value={upper}
                    onChange={(e) => onInputChange(e)}
                />
            </div>
            <button type="Search" className="btn btn-outline-primary">
              Submit
            </button>
        </form>
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
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/editproduct/${product.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}