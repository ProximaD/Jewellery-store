function Header() {
  return (
    <header style={styles.header}>
      <h2>TechSafi</h2>
      <nav>
        <a href="#">Home</a> | <a href="#">Shop</a> | <a href="#">Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#222',
    color: '#fff',
  },
};

export default Header;
