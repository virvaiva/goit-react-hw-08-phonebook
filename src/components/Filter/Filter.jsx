import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { nanoid } from 'nanoid';
import { Input, Flex } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value.trim()));
  };

  return (
    <Flex align="center" justify="center" flexDirection="column">
      Find contacts by Name
      <Input
        type="text"
        name="filter"
        placeholder="Search contact"
        id={nanoid()}
        onChange={handleFilterChange}
        width={400}
      />
    </Flex>
  );
};
