import './Navbar.css'
const navi = ()=> {

    return (
        <nav>
            <div className="navImg">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="https://flowbite.com/docs/images/logo.svg" />
                <h1>GeekFoods</h1>
            </div>
            <ol>
                <li>Home</li>
                <li>Quote</li>
                <li>Resturants</li>
                <li>Foods</li>
                <li>Contact</li>
            </ol>
            <button>Get started</button>
        </nav>
    )
}
export default navi;