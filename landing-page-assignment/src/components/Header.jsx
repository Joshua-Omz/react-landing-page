import Logo from '../assets/logo-bookmark.svg'

function Header(){

    const items = [
        {
            name : features,
        },
        {
            name : pricing,
        },
        {
            name : contact,
        },
    ]

    function NavLinks({name}){
        return(
            <>
                <li>{name}</li>
            </>
        )
    }


    return(
        <>
         <header className="">
            <div><img src={Logo} alt="" /></div>
            <nav>
                <ul>
                {items.map((item, index) => (  
                        <NavLinks key={index} name={item.name} />  
                    ))}
                </ul>
                <span>login</span>
            </nav>
         </header>
        </>
    )
}
export default Header;