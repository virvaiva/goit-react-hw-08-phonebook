import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';
import { Box, Input, Button, Flex } from '@chakra-ui/react';

export default function ContactsForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = form;

    let value = {
      name: name.value,
      number: number.value,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      return alert(`${name.value} is already in contacts.`);
    }

    dispatch(addContact(value));

    form.reset();
  };

  return (
    <Flex m={0} mb={5} fontSize={18}>
      <Box onSubmit={handleSubmit} width={300}>
        <Box marginBottom={5}>
          <label>Name</label>
          <Input
            placeholder="Enter your name"
            size="md"
            id={nanoid()}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Box>
        <Box marginBottom={5}>
          <label>Number</label>
          <Input
            placeholder="+38 (000) 000 00 00"
            id={nanoid()}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Box>
        <Button width="100%" colorScheme="teal" size="lg" type="submit">
          Add contact
        </Button>
      </Box>
    </Flex>
  );
}
