import React from "react";
import { ButtonGroup, Button, Select } from "@chakra-ui/react";
const Pagination = () => {
  const [count, setCount] = React.useState(1);
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">First</Button>
      <Button data-cy="pagination-previous-button">Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button
        onClick={() => setCount(count + 1)}
        data-cy="pagination-next-button"
      >
        Next
      </Button>
      <Button
        onClick={() => setCount(count - 1)}
        data-cy="pagination-last-button"
      >
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
