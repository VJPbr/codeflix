import React from 'react';
import codeflixlogo from '../../assets/img/codeflixlogo.png';
import './Menu.css';
//import ButtonLink from '../Menu/components/ButtonLink/index'
import Button from '../Button/index';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={codeflixlogo} alt="codeflix logo" />
            </a>
            
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;