import { Image } from '@chakra-ui/react';
import image from './img/phonebook.jpg';
export default function HomePage() {
  return (
    <div>
      <Image src={image} alt="phonebook" objectFit="cover" width="100%" />
    </div>
  );
}
