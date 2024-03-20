import Title from "./Title"

const Header = () => {
    return (
        <div className="navbar">
            <Title/>
            <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
            </ul>
        </div>
    )
}

export default Header;