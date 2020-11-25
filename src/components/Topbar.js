import React from 'react';
import { makeStyles, AppBar, Toolbar } from '@material-ui/core'; 
import clsx from 'clsx'; 

const useStyles = makeStyles(theme => ({}));

const Topbar = React.forwardRef(({
  children, 
  className, 
  menuClick, 
  ...props 
}, ref) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      ref={ref}
      onClick={menuClick}
      {...props}
    >
      <Toolbar>
        top bar
      </Toolbar>
    </AppBar>
  )
});

export default Topbar
