const FilterButtons = ({ handleClick, active }) => {
    const items = ["all", "web-app", "mobile-app", "web-page", "product"];

    return (
        < ul className='text-white text-[22px] flex justify-center my-[30px]'>
            {items.map((item,i) => (
                <li
                    className={`px-5 py-[10px] leading-none capitalize hover:shadow-shadow-tertary hover:text-black-primary transition-all duration-500 cursor-pointer ${active === item && "active"}`}
                    key={i}
                    onClick={() => handleClick(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}
export default FilterButtons
