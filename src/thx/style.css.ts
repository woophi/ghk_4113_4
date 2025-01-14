import { globalStyle, style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1rem',
  textAlign: 'center',
});

const rocket = style({
  width: '128px',
  height: '128px',
  borderRadius: '50px',
  backgroundColor: '#F3F4F5',
  margin: '9rem auto 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const icon = style({});

globalStyle(`${icon} > svg`, {
  width: '64px',
  height: '64px',
});

export const thxSt = {
  container,
  rocket,
  icon,
};
