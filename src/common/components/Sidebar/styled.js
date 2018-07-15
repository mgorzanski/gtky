import styled from 'styled-components';
import colors from './../../styles/colors';

const Sidebar = styled.div`
  background-color: ${colors.sidebarBackgroundColor};
  color: ${colors.sidebarTextColor$};
`;

const Nav = styled.nav`
  
`;

const Menu = styled.ul`
  list-style: none;
`;

const MenuItem = styled.li`

`;

const Icon = styled.a`
  color: ${colors.sidebarIconColor}; //propably will not be used anymore
`;

export { Sidebar, Nav, Menu, MenuItem, Icon };