import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg';
import {ReactComponent as Estatísticas} from '../../Assets/estatisticas.svg';
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg';
import {ReactComponent as Sair} from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

export default function UserHeaderNav() {
   const [mobile, setMobile] = useState(null);
   const {userLogout} = useContext(UserContext)
  
   return (
    <nav className={styles.nav}>
        <NavLink to="/conta" end>
            <MinhasFotos/>
            {mobile && 'Minhas Fotos'}
        </NavLink>

        <NavLink to="/conta/estatisticas">
            <Estatísticas/>
            {mobile && 'Estatísticas'}
           
        </NavLink>

        <NavLink to="/conta/postar">
            <AdicionarFoto/>
            {mobile && ' Adicionar Foto'}
           
        </NavLink>
        <button onClick={userLogout}>
            <Sair/>
            {mobile && 'Sair'}
            
        </button>
    </nav>
       
  )
}
