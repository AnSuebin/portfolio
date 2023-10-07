export interface ITheme {
  colors: {
    primary: string;
    second: string;
    darkGray: string;
    lightGray: string;
    red: string;
    background: string;
    border: string;
  };
  device: {
    mobile: string;
    tablet: string;
  };
}

const theme: ITheme = {
  colors: {
    primary: '#4B9AFD',
    second: '#3398FF',
    red: '#FF5A4F',
    darkGray: '#313A47',
    lightGray: '#929BA4',
    background: '#F9FBFE',
    border: '#dedede',
  },
  device: {
    mobile: '(max-width: 468px)',
    tablet: '(max-width: 1024px)',
  },
};
