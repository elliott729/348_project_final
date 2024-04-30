import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [product, setProduct] = useState({
    productName: "",
    retailPrice: "",
    wholesalePrice: "",
    quantity: "",
  });

  const { productName, retailPrice, wholesalePrice, quantity } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/product/${id}`, product);
    navigate("/");
  };

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:8080/product/${id}`);
    setProduct(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Product</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the product's name"
                name="productName"
                value={productName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="Retail Price" className="form-label">
                Retail Price
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter the product's retail price"
                name="retailPrice"
                value={retailPrice}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="Wholesale Price" className="form-label">
                Wholesale Price
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter the product's wholesale price"
                name="wholesalePrice"
                value={wholesalePrice}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter the available quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}