import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <div style={header}>
      <span style={headerSpanDate}>SMARCH 32, 2018</span>
      <h1 style={headerH1}>Lambda Times</h1>
      <span style={headerSpanTemp}>98°</span>
    </div>
  )
}

const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: '#fff',
  borderBottom: '1px solid lightgrey',
  width: '100%',
  height: '120px',
  marginTop: '44px',
  paddingBottom: '15px'
}

const headerH1 = {
  fontSize: '60px',
  fontFamily: 'Didot, serif',
  fontWeight: 'bold',
  flex: '8',
  textAlign: 'center',
  color: '#000'
}

const headerSpanDate = {
  alignSelf: 'flex-end',
  fontSize: '11px',
  fontWeight: 'bold',
  letterSpacing: '1px',
  marginLeft: '25px',
  flex: '1'
}

const headerSpanTemp = {
  alignSelf: 'flex-end',
  fontSize: '11px',
  fontWeight: 'bold',
  letterSpacing: '1px',
  textAlign: 'right',
  marginRight: '25px',
  flex: '1'
}
export default Header