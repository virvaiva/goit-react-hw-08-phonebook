import { Image, Text } from '@chakra-ui/react';
import image from './img/3771518.png';

const HomePage = () => {
  return (
    <div>
      <Text
        fontSize="5xl"
        textAlign="center"
        marginBottom={5}
        bgGradient="linear(to-l, #9928CA, #FF0050)"
        m="6"
        bgClip="text"
        fontWeight="extrabold"
      >
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
