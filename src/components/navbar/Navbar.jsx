
const Navbar = () => {
   const title = {name: 'LOGO', link: '/'}
   
   const links = [
      {name: 'Home', link: '/'},   // THIS LINK IS THE HOME PAGE
      {name: 'About', link: '/about'}, // THIS LINK IS THE ABOUT PAGE
      {name: 'Contact', link: '/contact'},   // THIS LINK IS THE CONTACT PAGE
   ]

  return (
    <div className="container">
      <a href={title.link}>{title.name}</a>
      <ul>
      {links.map((link) =>  {
         return (
         <li key={link.name}>
            <a href={link.link}>{link.name}</a>
         </li>
         )
      })}
      </ul>
    </div>
  )
}

export default Navbar