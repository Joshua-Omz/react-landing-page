import Logo from '../assets/logo-bookmark.svg';

function Header() {

    // Array of items with corrected string values
    const items = [
        {
            name: 'Features',  // Added quotes to make them strings
        },
        {
            name: 'Pricing',
        },
        {
            name: 'Contact',
        },
    ];

    // Function to return list items
    function NavLinks({ name }) {
        return (
            <>
                <li>{name}</li>
            </>
        );
    }

    return (
        <>
            <header className="">
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <nav>
                    <ul>
                        {items.map((item, index) => (
                            <NavLinks key={index} name={item.name} />
                        ))}
                    </ul>
                    <span>Login</span>
                </nav>
            </header>
        </>
    );
}

export default Header;
