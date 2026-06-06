function App() {
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
      <h1 style={{ marginBottom: "20px" }}>
        📦 StoreTrack Dashboard
      </h1>

      {/* Stats Cards */}
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
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Revenue</h3>
          <h2>₹45,000</h2>
        </div>
      </div>

      {/* Low Stock Alert */}
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

      {/* Product Table */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Products</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "15px",
          }}
        >
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ padding: "12px" }}>ID</th>
              <th style={{ padding: "12px" }}>Product</th>
              <th style={{ padding: "12px" }}>Stock</th>
              <th style={{ padding: "12px" }}>Price</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={{ padding: "12px", textAlign: "center" }}>
                  {product.id}
                </td>

                <td style={{ padding: "12px" }}>
                  {product.name}
                </td>

                <td style={{ padding: "12px" }}>
                  {product.stock}
                </td>

                <td style={{ padding: "12px" }}>
                  ₹{product.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Orders */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "25px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Recent Orders</h2>

        <ul>
          <li>Order #101 - Mouse x2</li>
          <li>Order #102 - Keyboard x1</li>
          <li>Order #103 - Monitor x1</li>
        </ul>
      </div>
    </div>
  );
}

export default App;