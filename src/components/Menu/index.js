import React from 'react';
import Logo from '../../assets/img/Logo.png';
import {LogoImage, MenuWrapper} from './style.js';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage className="Logo" src={Logo} alt="RafaFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;