import Tablet from './../../assets/Images/tablet.png';
import Mobile from './../../assets/Images/mobile.png';
import Watch from './../../assets/Images/watch.png';
import Headphones from './../../assets/Images/headphones.png';
import Teapot from './../../assets/Images/teapot.png';
import Computer from './../../assets/Images/computer.png';

export type RelatedProduct = {
  id: number;
  image: string; 
  title: string;
  price: string;
};

export const relatedProducts: RelatedProduct[] = [
  {
    id: 1,
    image: Tablet,
    title: 'Xiaomi Redmi 8 Original ',
    price: '$32.00-$40.00',
  },
  {
    id: 2,
    image: Watch,
    title: 'Xiaomi Redmi 8 Original ',
    price: '$32.00-$40.00',
  },
  {
    id: 3,
    image: Headphones,
    title: 'Xiaomi Redmi 8 Original ',
    price: '$32.00-$40.00',
  },
  {
    id: 4,
    image:Computer,
    title: 'Xiaomi Redmi 8 Original ',
    price: '$32.00-$40.00',
  },
  {
    id: 5,
    image: Teapot,
    title: 'Xiaomi Redmi 8 Original ',
    price: '$32.00-$40.00',
  },
   {
    id: 6,
    image: Mobile,
    title: 'Xiaomi Redmi 8 Original ',
    price: '$32.00-$40.00',
  },
];
