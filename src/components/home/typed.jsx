import React from "react";
import Typed from 'typed.js';

class Typer extends React.Component{
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.

      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
        strings: [
            'I am a <i>Full-stack Software Engineer</i>',
            'I am a fast learner',
            'I am a practical worker',
          ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
        <div className="wrap">
          <div className="">
            <span 
              style={{ whiteSpace: 'pre', fontSize: '20px' }}
              ref={(el) => { this.el = el; }}
            />
          </div>
        </div>
      );
    }
}

export default Typer;