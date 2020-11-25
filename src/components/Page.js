import React from 'react';
import { makeStyles } from '@material-ui/core'; 
import clsx from 'clsx'; 

const useStyles = makeStyles(theme => ({}));

const Page = React.forwardRef(({
  children, 
  className, 
  ...props 
}, ref) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
});

export default Page
