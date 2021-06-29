import React from 'react'
import {SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElement';

const Sidebar = ({ isOpen, toggle, about, services, portfolio, contact }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to={about} onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to={services} onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to={portfolio} onClick={toggle}>
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to={contact} onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
