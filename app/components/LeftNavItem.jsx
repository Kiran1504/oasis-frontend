function LeftNavMenuItem({ menu}) {
    return (
        <Link to={menu.path} key={index}>
        <li
          className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer text-white hover:bg-[#4B84FF]
                  ${menu.gap ? 'mt-9' : 'mt-2'} ${
            location.pathname === menu.path &&
            'bg-[#4B84FF]'
          }`}
        >
          <span className='text-2xl'>{menu.src}</span>
          <span
            className={`${
              !open && 'hidden'
            } origin-left duration-300 hover:block`}
          >
            {menu.title}
          </span>
        </li>
      </Link>
    );
  }
  
  export default LeftNavMenuItem;