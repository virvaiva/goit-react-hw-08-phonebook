import { Image, Text } from '@chakra-ui/react';
import image from './img/3771518.png';

const HomePage = () => {
  return (
    <div>
      <Text fontSize="5xl" textAlign="center" marginBottom={5}>
        Welcom, this is your Phonebook!
      </Text>

      <Image
        src={image}
        alt="phonebook"
        objectFit="cover"
        boxSize="350px"
        textAlign="center"
        marginLeft="auto"
        marginRight="auto"
      />
    </div>
  );
};
export default HomePage;
