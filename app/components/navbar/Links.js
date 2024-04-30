const Links = (props) => {
    const text = props.title;
    return ( 
        <>
        <style>
            {`
                @media only screen and (max-width: 500px){
                    .main-nav{
                        display:none;
                    }
                    
                }
                @media only screen and (min-width: 500px){
                    .main-nav{
                        display:block;
                    }
                }
                @media only screen and (min-width: 500px) and (max-width: 1100px){
                    .link:hover{
                        // transition-property: width, height;
                        // transition-duration: 2s;
                        // transition-timing-function: ease;
                        // transition-delay: 0s;
                        
                    }
                    
                    
                }
            `}
        </style>
            <button className="link hover:bg-[#4b84ff] hover:text-[#fff] hover:text-semibold px-[10px] py-[10px] rounded-[5px] transition ease-in-out duration-400 hover:font-semibold hover:translate-x-2 duration-400">{text}</button>
        </>
     );
}
 
export default Links;