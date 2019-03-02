import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const darkTheme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
       primary: red,
       type: "dark"
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
  });
  
  const lighTheme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
       primary: red,
       type: "light"
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
  });

 const myThemes = {darkTheme:darkTheme, lighTheme:lighTheme};

  export default myThemes;
