import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const imgHb = style({
  height: '280px',
  width: '100%',
  objectFit: 'cover',
});

const switchItem = style({
  paddingLeft: '8px',
});

globalStyle(`${switchItem} > span > span:first-child`, {
  fontWeight: 500,
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const btmContent = style({
  padding: 0,
});

const btn = style({
  padding: '1rem',
  borderRadius: '24px',
});

const btnContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  gap: '1rem',
});

const inputBox = style({
  backgroundColor: '#2637580F',
  borderRadius: '10px',
  padding: '0 12px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const inputContainer = style({
  borderRadius: '12px',
  padding: '4px 4px 4px 16px',
  backgroundColor: '#2637580F',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '48px',
});
const inputValue = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

const inputActions = style({
  backgroundColor: '#1E2B4414',
  borderRadius: '8px',
  padding: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  color: '#04041578',
});
const inputActionsHR = style({
  height: '16px',
  width: '1px',
  backgroundColor: '#04041578',
});
const inputActionsMinus = style({});

globalStyle(`${inputActionsMinus} > svg > rect:last-child`, {
  fill: '#04041578',
});

const swSlide = recipe({
  base: {
    minWidth: '58px',
    maxWidth: 'max-content',
    height: '40px',
    backgroundColor: '#2637580F',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '17px',
    letterSpacing: '-0.41px',
    lineHeight: '24px',
    textAlign: 'center',
    transition: 'all .25s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: '#000',
        color: '#FFF',
        fontWeight: 600,
      },
    },
  },
});

const inputs = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  marginTop: '1rem',
});

export const appSt = {
  bottomBtn,
  container,
  switchItem,
  imgHb,
  row,
  btmContent,
  btnContainer,
  btn,
  inputBox,
  inputContainer,
  inputValue,
  inputActions,
  inputActionsHR,
  inputActionsMinus,
  swSlide,
  inputs,
};
