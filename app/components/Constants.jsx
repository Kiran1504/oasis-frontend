import { IoMdHome } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { MdEvent } from "react-icons/md";
import { SiOpenaccess } from 'react-icons/si'

export const categories = [
    { title: 'Home', path: '/', src: <IoMdHome />},
    { title: 'Communities', path: '/communities', src:<IoMdPeople  /> },
    { title: 'Events', path: '/events', src: <MdEvent />},
];