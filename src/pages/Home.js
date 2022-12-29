import { Image } from '@chakra-ui/react';
import image from './img/phonebook.jpg';
const HomePage = () => {
  return (
    <div>
      <Image src={image} alt="phonebook" objectFit="cover" width="100%" />
    </div>
  );
};
export default HomePage;