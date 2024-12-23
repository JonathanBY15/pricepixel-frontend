import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './SubTitle.css'; // Import the CSS for styling (optional)

const SubTitle = ({ text }) => {
  return (
    <p className="subtitle">
      Your one-stop destination for finding the <span className="highlighted-text">best game prices on the internet</span>.
      {/* Your one-stop destination for finding the <span className="highlighted-text">best game prices</span>. */}
    </p>
  );
};

// PropTypes for validating the prop type
SubTitle.propTypes = {
  text: PropTypes.string.isRequired, // Ensure that text is a required string
};

export default SubTitle;
