import React from 'react';
import { makeStyles, Drawer, Toolbar, Divider } from '@material-ui/core'; 
import clsx from 'clsx'; 

const useStyles = makeStyles(theme => ({}));

const Sidebar = React.forwardRef(({
  children, 
  className, 
  ...props 
}, ref) => {
  const classes = useStyles();

  return (
    <Drawer
      classes={{
        root: clsx(classes.root, className), 
        paper: clsx(classes.root, className), 
      }}
      variant="permanent"
      ref={ref}
      {...props}
    >
      <Toolbar>
        side bar
      </Toolbar>

      <Divider />
    </Drawer>
  )
});

export default Sidebar
