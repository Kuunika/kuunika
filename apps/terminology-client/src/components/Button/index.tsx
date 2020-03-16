import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, blue, red, brown } from '@material-ui/core/colors';
import styled from 'styled-components';
import { theme } from '../../config/theme';

const themes = {
  theme: {
    color: 'white',
    backgroundColor: theme.color,
    onHoverColor: theme.lightDarkColor
  },
  primary: {
    color: 'white',
    backgroundColor: blue[500],
    onHoverColor: blue[700]
  },
  success: {
    color: 'white',
    backgroundColor: green[500],
    onHoverColor: green[700]
  },
  danger: {
    color: 'white',
    backgroundColor: red[500],
    onHoverColor: red[700]
  },
  warning: {
    color: 'white',
    backgroundColor: brown[500],
    onHoverColor: brown[700]
  },
  default: {
    color: theme.lightColor,
    backgroundColor: 'whitesmoke',
    onHoverColor: '#ebebeb'
  }
};

function Btn(props: Props) {
  const theme = props.theme ? themes[props.theme] : themes.theme;

  const CustomBtn = withStyles(() => ({
    root: {
      color: theme.color,
      textTransform: 'capitalize',
      backgroundColor: theme.backgroundColor,
      borderRadius: '50px',
      padding: '8px 20px',
      '&:hover': {
        backgroundColor: theme.onHoverColor
      }
    }
  }))(Button);

  return (
    <CustomBtn
      style={props.style}
      variant={
        props.theme && props.theme === 'default' ? 'outlined' : 'contained'
      }
      onClick={props.onClick ? props.onClick : () => {}}
      {...props}
    >
      {props.icon ? <IconWrapper>{props.icon}</IconWrapper> : <></>}
      {props.children}
    </CustomBtn>
  );
}

type Props = {
  children: any;
  icon?: any;
  onClick?: any;
  theme?: 'theme' | 'primary' | 'success' | 'danger' | 'warning' | 'default';
  style?: any;
};
export default Btn;

const IconWrapper = styled.div`
  display: inline-block;
  margin-right: 10px;
`;
