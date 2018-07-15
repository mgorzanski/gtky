import React from 'react';

import { Sidebar as SidebarDiv, Menu, MenuItem, Nav, Icon } from './styled';

import MdTrackChanges from 'react-icons/lib/md/track-changes';
import MdNoteAdd from 'react-icons/lib/md/note-add';
import MdToday from 'react-icons/lib/md/today';
import MdList from 'react-icons/lib/md/list';
import MdAirlineSeatIndividualSuite from 'react-icons/lib/md/airline-seat-individual-suite';

const iconSize = 48;

class Sidebar extends React.Component {
  render() {
    return (
      <SidebarDiv>
        <Nav>
          <Menu>
            <MenuItem><Icon><MdTrackChanges color="#f9f9f9" size={iconSize} /></Icon></MenuItem>
            <MenuItem><Icon><MdToday color="#f9f9f9" size={iconSize} /></Icon></MenuItem>
            <MenuItem><Icon><MdAirlineSeatIndividualSuite color="#f9f9f9" size={iconSize} /></Icon></MenuItem>
            <MenuItem><Icon><MdNoteAdd color="#f9f9f9" size={iconSize} /></Icon></MenuItem>
            <MenuItem><Icon><MdList color="#f9f9f9" size={iconSize} /></Icon></MenuItem>
          </Menu>
        </Nav>
      </SidebarDiv>
    );
  }
}

export default Sidebar;