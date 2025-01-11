
import Suit from './../../assets/Images/suit.png';
import GreyShirt from './../../assets/Images/grey-shirt.png';
import Jacket from './../../assets/Images/jacket.jpg';
import BlueShirt from './../../assets/Images/blue-shirt.png';
import GreyShirt2 from './../../assets/Images/grey-shirt.png';

export type WishList = {
  id: number;
  image: string; 
  title: string;
  price: string;
};

export const wishList: WishList[] = [
  {
    id: 1,
    image: Suit,
    title: 'Apple Watch Series Space Gray ',
    price: '$7.00 - $99.50',
  },
  {
    id: 2,
    image: GreyShirt,
    title: 'Apple Watch Series Space Gray ',
    price: '$7.00 - $99.50',
  },
  {
    id: 3,
    image: Jacket,
    title: 'Apple Watch Series Space Gray ',
    price: '$7.00 - $99.50',
  },
  {
    id: 4,
    image: BlueShirt,
    title: 'Apple Watch Series Space Gray ',
    price: '$7.00 - $99.50',
  },
    {
    id: 5,
    image: GreyShirt2,
    title: 'Apple Watch Series Space Gray ',
    price: '$7.00 - $99.50',
  },
];
