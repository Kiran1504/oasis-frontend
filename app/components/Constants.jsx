import { IoMdHome } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { MdEvent } from "react-icons/md";
import { SiOpenaccess } from 'react-icons/si'

export const categories = [
    { title: 'Home', path: '/', src: <IoMdHome />},
    { title: 'Community', path: '/community', src:<IoMdPeople  /> },
    { title: 'Event', path: '/event', src: <MdEvent />},
    { title: 'Signin', path: '/login', src: <SiOpenaccess />, gap: 'true' },
];