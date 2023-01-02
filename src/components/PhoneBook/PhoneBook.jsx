import ContactsForm from 'components/ContactsForm/ContactsForm';
import { Flex, Heading } from '@chakra-ui/react';

const Phonebook = () => {
  return (
    <Flex align="center" justify="center" flexDirection="column">
      <Heading
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
        mb={5}
      >
        Phonebook
      </Heading>
      <ContactsForm />
      <Heading
        bgGradient="linear(to-l, #28ca3b, #FF0080)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
        mb={5}
      >
        Contacts
      </Heading>
    </Flex>
  );
};

export default Phonebook;
