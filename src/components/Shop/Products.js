import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DummuyProduct = [
  {
    id: "m1",
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "m2",
    title: "Egg Tart",
    price: 10,
    description: "Egg Tart serve from heaven to your heart",
  },
];

const Products = (props) => {
  const ProductItemLists = DummuyProduct.map((meal) => (
    <ProductItem
      key={meal.id}
      id= {meal.id}
      title={meal.title}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {ProductItemLists}
      </ul>
    </section>
  );
};

export default Products;
