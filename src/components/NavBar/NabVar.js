import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
       <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Utilidades</button>
                <button>Juguetes</button>
                <button>varios</button>
            </div>
            <CartWidget/>
       </nav>
    )
}
export default NavBar