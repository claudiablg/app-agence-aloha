import { ButtonHTMLAttributes, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { classnames } from "@aloha/utilities";
import * as styles from './nav-item-link.css';

type NavItemLinkProps = {
    className?: any,
    title: string,
    to: string,
    active?: boolean,
    disabled?: boolean,
    icon?: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}


export const NavItemLink: React.FC<NavItemLinkProps> = ({  
    className,
    title,
    to,
    active = false,
    disabled,
    icon, 
    onClick,
    ...props
}) => {

    const location = useLocation();
    const { pathname } = location;
    active = pathname === to;
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }

    const classNames = classnames([
        className,
        styles.a,
        // styles[color ? color :  Color.black],
    ])

    return(
        <>
            <li className={styles.navItemLink} {...props}>
               <div className={styles.wrapper}>
                    <NavLink aria-label={title} to={to} onClick={handleClick} className={classNames}>
                        {title}
                    </NavLink>
               
                    {/* {active && <Line className={styles.line} />} */}
                </div> 
            </li>

        </>
    )
}

export default NavItemLink;

