import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import Card from './Cards'
import basil from '../../assets/img/basil.png'

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        {/* <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row> */}
        <Card title="HiCamp" desc="HiCamp a full stack Hipcamp clone. 
        It is using Ruby on Rails backend framework, PostgreSQL as backend database,
         React-redux for interface and state management. Seeds data by using Amazon web services, 
         and Google Maps API interactive with user." imgLink="https://hicamp-seed.s3-us-west-1.amazonaws.com/Campsites.gif" liveLink="https://hicamp-zz.herokuapp.com/#/"></Card>

        <Card title="Basil" desc="Basil aims to provide a clean, interactive, and streamlined environment for users who need quick meal suggestions for the week with personalization in mind. Not only can users select their food preferences but also track their dietary progress through interaction in the app. Basil is primarily built with the MERN stack, a combination of the following four technologies: MongoDB, Express, React/Redux, and Node.js." 
        imgLink='https://hicamp-seed.s3-us-west-1.amazonaws.com/basil.png' liveLink="https://basil-mern.herokuapp.com/#/"></Card>

        <Card title="DFO" desc="DFO is a dungeon-style Battle Royale mini-game that allows players to fight monsters from unknown places in a dark dungeon. Along with exciting music, players will now encounter two different kinds of monsters. DFO currently has three features, the first of which is automatic escalation of player actions, monster attacks, and difficulty." imgLink="https://hicamp-seed.s3-us-west-1.amazonaws.com/dfo2.PNG" liveLink="https://zhz364.github.io/DFO/"></Card>
        
      </Container>
    </Jumbotron>
  );
};

export default Project;
