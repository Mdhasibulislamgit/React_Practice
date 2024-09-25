

import Product from "./component/Product";

const App = () => {
  let option1 = ["Hi-tech", "Luxury", "Modern"];

   
  return (
    <div>
      <Product title={"hello"} description={"world"} feature={option1} />

      <hr />

      <Product
        title={"We"}
        description={100}
        feature2={["Hi-tech", "Luxury", "Modern"]}
      />
    </div>
  );
}
  export default App;
