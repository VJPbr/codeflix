import React from 'react';
import {Link} from 'react-router-dom';
import codeflixlogo from '../../assets/img/codeflixlogo.png';
import './Menu.css';
//import ButtonLink from '../Menu/components/ButtonLink/index'
import Button from '../Button/index';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={codeflixlogo} alt="codeflix logo" />
            </Link>
            
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;