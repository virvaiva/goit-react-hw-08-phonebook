import { useDispatch, useSelector } from 'react-redux';
import { IoIosContact } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { getVisibleContacts } from 'redux/contacts/selectors';
import { Flex, Grid, GridItem, Button } from '@chakra-ui/react';

const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));
  const contacts = useSelector(getVisibleContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Flex align="center" justify="center" m={5}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {contacts.map(({ id, name, number }) => (
          <GridItem
            key={id}
            p={3}
            w="100%"
            h="10"
            border="2px"
            borderRadius="4px"
            borderColor="gray.200"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex align="center" justify="center">
              <IoIosContact size={30} />
              {name}: {number}
            </Flex>
            <Button
              type="button"
              onClick={() => onDeleteContact(id)}
              ml={10}
              colorScheme="teal"
              variant="link"
            >
              <MdDeleteOutline size={28} />
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
export default ContactList;
