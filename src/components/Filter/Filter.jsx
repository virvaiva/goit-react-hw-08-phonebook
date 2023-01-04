import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'redux/contacts/filterSlice';
import { Input, Flex, Text } from '@chakra-ui/react';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(contactsFilter(event.target.value));
  };

  return (
    <Flex align="center" justify="center" flexDirection="column" mb={10}>
      <Text mb={2}>Find contacts by Name</Text>
      <Input
        type="text"
        name="filter"
        placeholder="Search contact"
        value={filter}
        onChange={handleFilterChange}
        width={400}
      />
    </Flex>
  );
};
