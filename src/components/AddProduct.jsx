import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = (onOpen) => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { onOpen } = React.useRef();

  return (
    <>
      <Button onClick={onOpen} my={4} data-cy="add-product-button">
        Add New Product
      </Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
