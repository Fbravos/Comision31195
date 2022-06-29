import Nav from "./components/Nav"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
        <h1 className="titulo">La Tienda del Arquero</h1>
      </Link>
      <Nav
        inHeader={true}
        laClase="navbar-header"
      />
    </header>
  )
}

export default Header