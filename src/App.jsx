
import Product from './component/Product';

const App = () => {
  const product1 = {
    name: "John Doe",
    age: 28,
    email: "john.doe@example.com",
  };

  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {product1.name}</p>
      <p>Age: {product1.age}</p>
      <p>Email: {product1.email}</p>
      
      <Product product={{ name: "Laptop", price: 50000 }} />
    </div>
  );
};

export default App;
