const products = [
  { id: 1, name: "Smartphone", price: "$299" },
  { id: 2, name: "Bluetooth Speaker", price: "$49" },
  { id: 3, name: "Laptop", price: "$899" },
];

function Products() {
  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: { padding: '2rem' },
  grid: { display: 'flex', gap: '1rem', justifyContent: 'center' },
  card: { border: '1px solid #ccc', padding: '1rem', width: '200px', textAlign: 'center' },
};

export default Products;
