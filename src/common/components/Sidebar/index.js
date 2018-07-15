import React from 'react';

import { Sidebar as SidebarDiv, Menu, MenuItem, Nav, Icon } from './styled';

import MdTrackChanges from 'react-icons/lib/md/track-changes';
import MdNoteAdd from 'react-icons/lib/md/note-add';
import MdToday from 'react-icons/lib/md/today';
import MdList from 'react-icons/lib/md/list';
import MdAirlineSeatIndividualSuite from 'react-icons/lib/md/airline-seat-individual-suite';

class Sidebar extends React.Component {
  render() {
    return (
      <SidebarDiv>
        <Nav>
          <Menu>
            <MenuItem><Icon><MdTrackChanges /></Icon></MenuItem>
            <MenuItem><Icon><MdToday /></Icon></MenuItem>
            <MenuItem><Icon><MdAirlineSeatIndividualSuite /></Icon></MenuItem>
            <MenuItem><Icon><MdNoteAdd /></Icon></MenuItem>
            <MenuItem><Icon><MdList /></Icon></MenuItem>
          </Menu>
        </Nav>
      </SidebarDiv>
    );
  }
}

export default Sidebar;