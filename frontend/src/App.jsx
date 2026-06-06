import { useEffect, useState } from "react";
import { useEffect, useState } from "react";

function App() {
  const [apiMessage, setApiMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://storetrack-full.onrender.com/")
      .then((res) => res.json())
      .then((data) => setApiMessage(data.message))
      .catch(() => setApiMessage("API Connection Failed"));
  }, []);

  const products = [
    { id: 1, name: "Mouse", stock: 3, price: 499 },
    { id: 2, name: "Keyboard", stock: 5, price: 999 },
    { id: 3, name: "Monitor", stock: 15, price: 8999 },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f5f7fa",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>
        📦 StoreTrack Dashboard
      </h1>

      <p
        style={{
          background: "#d1e7dd",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        Backend Status: <b>{apiMessage}</b>
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Total Products</h3>
          <h2>25</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Total Customers</h3>
          <h2>10</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Total Orders</h3>
          <h2>35</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Revenue</h3>
          <h2>₹45,000</h2>
        </div>
      </div>

      <div
        style={{
          background: "#fff3cd",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "25px",
        }}
      >
        <h3>⚠ Low Stock Alerts</h3>
        <ul>
          <li>Mouse - 3 units left</li>
          <li>Keyboard - 5 units left</li>
        </ul>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h2>Products</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th>ID</th>
              <th>Product</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.stock}</td>
                <td>₹{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;