import { Link } from "react-router-dom" // import this to stop browser to reload
const Navbar = () => {
   const title = {name: 'LOGO', link: '/'}
   
   const links = [
      {name: 'Home', link: '/'},   // THIS LINK IS THE HOME PAGE
      {name: 'About', link: '/about'}, // THIS LINK IS THE ABOUT PAGE
      {name: 'Contact', link: '/contact'},   // THIS LINK IS THE CONTACT PAGE
   ]

  

  return (
    <div className="container">
      <Link to={title.link}>{title.name}</Link>
      <ul>
      {links.map((link) =>  {
         return (
         <li key={link.name}>
            {/* this is the method */}
            <Link to={link.link}>{link.name}</Link>   
         </li>
         )
      })}
      </ul>
    </div>
  )
}

export default Navbar