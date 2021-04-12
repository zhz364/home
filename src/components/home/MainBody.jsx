import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Typer from './typed'
import uimg from '../../assets/img/3.jpeg'
import Nav from "react-bootstrap/Nav";
import {scroller} from 'react-scroll';



const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          backgroundImage: `url(${uimg})`,
          backgroundPositionX:'center',
          backgroundPositionY:'center', 
          left:'0',
          top:'0', 
          backgroundSize:'100% 100%'
        }}
        className="title text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typer className = "zztyper"/>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
              onSelect={() => scroller.scrollTo('aboutme', {
                smooth: true,
                offset: -70,
                duration: 500,
              })}
            >
              More about me
            </Nav.Link>
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
