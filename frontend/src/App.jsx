function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>📦 StoreTrack Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ border: "1px solid gray", padding: "20px" }}>
          <h3>Total Products</h3>
          <p>25</p>
        </div>

        <div style={{ border: "1px solid gray", padding: "20px" }}>
          <h3>Total Customers</h3>
          <p>10</p>
        </div>

        <div style={{ border: "1px solid gray", padding: "20px" }}>
          <h3>Total Orders</h3>
          <p>35</p>
        </div>
      </div>

      <h2>Low Stock Products</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mouse</td>
            <td>3</td>
          </tr>

          <tr>
            <td>Keyboard</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;