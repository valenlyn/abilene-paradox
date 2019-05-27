import React from 'react';
import styles from './style.scss';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Share extends React.Component {

    render() {

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

        return (
            <React.Fragment>
                <a href={this.props.whatsAppLink} target="_blank" rel="noopener noreferrer">Share to WhatsApp</a>
                <br/>
                <a href={this.props.telegramLink} target="_blank" rel="noopener noreferrer">Share to Telegram</a>
            </React.Fragment>
        );
        }
    }

export default Share;