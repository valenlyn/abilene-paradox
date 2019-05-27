import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function Share(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        Share
      </Button>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >


        <a href={props.telegramLink} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            <StyledMenuItem>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Telegram" />
            </StyledMenuItem>
        </a>

        <a href={props.whatsAppLink} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            <StyledMenuItem>
                  <ListItemIcon>
                   <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="WhatsApp" />
            </StyledMenuItem>
        </a>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Copy Link" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

export default Share;