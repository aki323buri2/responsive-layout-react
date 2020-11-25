import React from 'react'
import Sidebar from './components/Sidebar'; 
import Topbar from './components/Topbar'; 
import Page from './components/Page'; 
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core'; 

const useStyles = makeStyles(theme => ({
  sidebar: {
    width: 250, 
  }, 
  topbar: {
    width: margin => `calc(100% - ${margin.left}px)`, 
  }, 
  page: {
    marginLeft: margin => margin.left, 
    marginTop: margin => margin.top, 
  }, 
}));

const App = () => {
  const refs = useRefs();
  const breakpoints = useBreakpoints();
  const margin = useMargin(refs, breakpoints);
  const props = useProps(margin, breakpoints);
  
  return (
    <div>
      <Sidebar {...props.sidebar} ref={refs.sidebar} />
      <Topbar {...props.topbar} ref={refs.topbar} />
      <Page {...props.page} ref={refs.page}>
        <pre>{JSON.stringify(margin)}</pre>
        <pre>{JSON.stringify(breakpoints)}</pre>
      </Page>
    </div>
  )
}

export default App;

const useRefs = () => {
  const refs = {
    sidebar: React.useRef(), 
    topbar: React.useRef(), 
    page: React.useRef(), 
  };
  return refs;
};

const useMargin = (refs, breakpoints) => {
  const [left, setLeft] = React.useState(0);
  const [top, setTop] = React.useState(0);

  React.useEffect(() => {
    const { sidebar, topbar } = refs;
    const { sm } = breakpoints;
    if (sidebar.current) {
      setLeft(sm ? 0 : sidebar.current.clientWidth);
    }
    if (topbar.current) {
      setTop(topbar.current.clientHeight);
    }
  }, [refs, breakpoints]);

  return { left, top };
};

const useBreakpoints = () => {
  const theme = useTheme();
  const breakpoints = {
    sm: useMediaQuery(theme.breakpoints.down('sm')), 
    xs: useMediaQuery(theme.breakpoints.down('xs')), 
  };
  return breakpoints;
};

const useProps = (margin, breakpoints) => {
  const classes = useStyles(margin);
  const [variant, setVariant] = React.useState('permanent');
  const [open, setOpen] = React.useState(false);
  const onClose = () => setOpen(false);
  const toggleOpen = () => setOpen(!open);

  const menuClick = React.useCallback(() => {
    if (variant === 'temporary') {
      toggleOpen();
    }
  }, [variant]);

  React.useEffect(() => {
    setVariant(breakpoints.sm ? 'temporary' : 'permanent');
  }, [breakpoints]);

  React.useEffect(() => {
    if (variant === 'temporary') {
      setOpen(false);
    }
  }, [variant]);

  const props = {
    sidebar: { className: classes.sidebar }, 
    topbar: { className: classes.topbar }, 
    page: { className: classes.page }, 
  };
  Object.assign(props.sidebar, {
    variant, 
    open, 
    onClose, 
  });
  Object.assign(props.topbar, {
    menuClick, 
  });

  return props;
};

