import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 16,
  },
  overrides: {
    // MuiSvgIcon: {
    //   root: {
    //     color: "#000",
    //   },
    // },

    MuiButton: {
      textPrimary: {
        textTransform: 'none',
        float: 'right',
      },
    },
    MuiFab: {
      label: {
        textTransform: 'none',
      },
    },
    MuiAvatar: {
      root: {
        width: '60px',
        height: '60px',
      },
    },
    MuiTypography: {
      h5: {
        color: '#1fb8ea',
        margin: '20px 0',
      },
      h6: {
        fontFamily: 'Lato, sans-serif',
      },
      subtitle1: {
        color: '#1fb8ea',
      },

    },

  },
  palette: {
    primary: {
      main: '#1fb8ea',
    },
    secondary: {
      main: '#fff',
    },
  },
});
