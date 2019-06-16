import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const TopBar = () => {
  return (
    <div style={topBar}>
      <div style={container}>
        <div style={containerLeft}>
          <span style={containerLeftSpan}>TOPICS</span><span style={containerLeftSpan}>SEARCH</span>
        </div>
        <div style={containerCenter}>
          <span style={containerCenterSpan}>GENERAL</span><span style={containerCenterSpan}>BROWNBAG</span><span style={containerCenterSpan}>RANDOM</span><span style={containerCenterSpan}>MUSIC</span><span style={containerCenterSpan}>ANNOUNCEMENTS</span>
        </div>
        <div style={containerRight}>
          <span style={containerRightSpan}>LOG IN</span>
        </div>
      </div>
    </div>
  )
}


const topBar = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'none',
  flexDirection: 'row',
  position: 'fixed',
  height: '44px',
  backgroundColor: '#333',
};

const container = {
  width: '100%',
  display: 'flex',
  justifyContent: 'none',
  alignItems: 'none',
  flexDirection: 'row',
  color: '#fff',
  letterSpacing: '1px',
  padding: '0 10px'
}

const containerLeft = {
  display: 'flex',
  justifyContent: 'none',
  alignItems: 'center',
  flexDirection: 'row',
  flex: '1',
  fontSize: '11px'
}

const containerCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flex: '3',
  fontSize: '9px'
}

const containerLeftSpan = {
  cursor: 'pointer',
  marginRight: '25%',
  fontWeight: 'bold'
}

const containerCenterSpan = {
  cursor: 'pointer',
  marginRight: '5%'
}

const containerRight = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'row',
  flex: '1',
  fontSize: '11px',
  fontWeight: 'bold'
}

const containerRightSpan = {
  cursor: 'pointer'
}


export default TopBar;