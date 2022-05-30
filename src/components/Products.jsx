import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Flex, Grid } from "@chakra-ui/react";
import axios from "axios";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  const [product, setProduct] = React.useState([])

  React.useEffect(() => {
    const getProduct = async () => {
      let res = await axios.get(`http://localhost:8080/products`);
      setProduct(res.data);
      console.log(res.data);
    };
    getProduct();
  },[]);

  return (
    <Flex>
      <AddProduct />
      <Grid>
        <Product product={product} />
      </Grid>
      <Pagination />
    </Flex>
  );
};

export default Products;
