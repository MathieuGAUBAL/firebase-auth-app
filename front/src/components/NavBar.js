const NavBar = ({deconnexion}) => {



    return (
        <nav>
            <ul>
                <li><button type="button" onClick={deconnexion}>deconnexion</button></li>
            </ul>
        </nav>
    )
}

export default NavBar;