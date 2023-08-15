import React, { PropsWithChildren } from 'react'
import { NavItemLink } from '../nav-item-link/nav-item-link';
import * as styles from './navbar.css';


type Props = {

}

const links = [
    {   
        title: "L'agence",
        to: "/agence",
    },
    {   
        title: "Secteurs d'activités",
        to: "/secteurs-activites",
    },
    {   
        title: "Expertises",
        to: "/expertises",
    },
    {   
        title: "Blog",
        to: "/blog",
    },
    {   
        title: "Contact",
        to: "/contact",
    },
]


export const Navbar: React.FC<Props> = ({  }) => {

    return (
        <nav className={styles.nav}>
            <div className={styles.wrapper}>
                {links.map((link, index) => {
                    return (
                        <NavItemLink to={link.to} title={link.title}></NavItemLink>
                    )
                })}
            </div>
        </nav>
    )
}

