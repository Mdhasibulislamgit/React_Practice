const Product = ({ title, description, feature, feature2, }) => {
  return (
    <div>
      <h1>Product Page</h1>
      
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Features: {feature}</p>
      <p>Features 2: {feature2}</p>
      
    </div>
  );
};

export default Product;
