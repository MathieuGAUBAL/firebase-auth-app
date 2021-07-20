const NavBar = ({setAuth}) => {

   const handleClickDeconnexion = () => {
       console.log("deconnexion");
        window.localStorage.removeItem('auth');
        setAuth(false);
    }

    return (
        <nav>
            <ul>
                <li><button type="button" onClick={handleClickDeconnexion}>deconnexion</button></li>
            </ul>
        </nav>
    )
}

export default NavBar;