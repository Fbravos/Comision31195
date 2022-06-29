import Nav from "./components/Nav"

const Footer = () => {

  return (
    <footer className="footer">
      <p>Copyright Todos los Derechos Reservados &copy;</p>
      <Nav 
      inHeader={false} 
      laClase="navbar-footer"
      />
    </footer>
  )
  
}

export default Footer