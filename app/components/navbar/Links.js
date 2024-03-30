const Links = (props) => {
    const text = props.title;
    return ( 
        <>
            <button className="hover:bg-[#4b84ff] hover:text-[#fff] hover:text-semibold px-[10px] py-[10px] rounded-[5px] transition ease-in-out duration-400 hover:font-semibold hover:translate-x-2 duration-400">{text}</button>
        </>
     );
}
 
export default Links;