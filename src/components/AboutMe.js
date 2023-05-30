import React from 'react';
import '../styles/Section.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'orange',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Who is Andy Bock?</h2>
      <p>
        I am a new web developer that just completed a full stack coding boot camp with the University of Central Florida.
      </p>
      <p>
        I earned my bachelor's degree in English/Creative Writing in 2012, but after years of freelance writing I decided to pivot and expand my skillset.
      </p>
      <p>
        I was born and raised in Vero Beach, FL until I attended the University of Central Florida for a few years. After graduating, I worked for Disney World for a couple of years until my writing career led me to move to Nashville, TN. I lived there for six years, working in the business side of the music industry by day and as a freelance writer by night, writing the scripts to over 40 radio commercials.
      </p>
    </section>
  );
}

export default Section;
