import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_prod = [
  {
    id: "p1",
    price: 6,
    title: "First Prodact",
    description: "the first book i read",
  },
  {
    id: "p2",
    price: 10,
    title: "Second Book Prodact",
    description: "The second book i read",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_prod.map((products) => (
          <ProductItem
            key={products.id}
            id={products.id}
            title={products.title}
            price={products.price}
            description={products.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
