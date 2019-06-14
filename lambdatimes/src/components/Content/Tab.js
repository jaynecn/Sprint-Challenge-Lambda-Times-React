import React from 'react';
import PropTypes from 'prop-types';



const Tab = props => {
  
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={''}
      onClick={(event) => {props.selectTabHandler(event)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  toUpperCase: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired
}
// Make sure you include PropTypes on your props.

export default Tab;
