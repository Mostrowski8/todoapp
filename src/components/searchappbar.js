import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';





const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

const menuButton = {
  marginLeft: -12,
    marginRight: 20
}


class SimpleMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
    };
  }
 

  handleClick = event => {
    
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
  
    this.setState({ anchorEl: null });
  };

 

  render() {
    const { anchorEl } = this.state;
    const clearAll = this.props.clearAll;
    const handleChangeTheme = this.props.handleChangeTheme;
    const handleInfoOpen = this.props.handleInfoOpen;
    
    return (
      <div>

      <IconButton style={menuButton} color="inherit" aria-label="Open drawer" aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}>
            <MenuIcon />
      </IconButton>


        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          disableAutoFocusItem
        >
          <MenuItem onClick={(e) => {handleChangeTheme(); this.handleClick(e); this.handleClose()}}>Change theme</MenuItem>
          <MenuItem onClick={(e) => {this.handleClick(e); clearAll(); this.handleClose(e)}}>Clear all</MenuItem>
          <MenuItem onClick={(e) => {handleInfoOpen(); this.handleClick(e); this.handleClose()}}>Info</MenuItem>
        </Menu>
      </div>
    );
  }
}


function SearchAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <SimpleMenu handleInfoOpen={props.handleInfoOpen} handleChangeTheme={props.handleChangeTheme} clearAll={props.clearAll}></SimpleMenu>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
           {props.title}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
            onChange={props.handleSearch}
              placeholder="Search by name"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  clearAll: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  handleChangeTheme: PropTypes.func.isRequired,
  handleInfoOpen: PropTypes.func.isRequired
};

SimpleMenu.propTypes = {
  handleChangeTheme: PropTypes.func.isRequired,
  handleInfoOpen: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired
}


export default withStyles(styles)(SearchAppBar);
