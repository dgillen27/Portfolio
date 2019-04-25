import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu'

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

const RenderPropsMenu = (props) => {
  const {currentUser} = props
  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };

        const handleHome = () => {
          updateAnchorEl(null);
        };

        return (
          <React.Fragment>
            <Button
              aria-owns={open ? 'render-props-menu' : undefined}
              aria-haspopup="true"
              className="the-button"
              id="the-button"
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
            >
            <HamburgerMenu />
            </Button>
            <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleHome}>Home</MenuItem>
            <MenuItem onClick={handleClose}>Projects</MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Menu>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

export default RenderPropsMenu;
