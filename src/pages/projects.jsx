import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							My Projects
						</div>

						<div className="subtitle projects-subtitle">
							Welcome, this is where I showcase a diverse array of endeavors that mark my growth and accomplishments. 
							Many of these projects are open-source, inviting exploration and collaboration from fellow enthusiasts like you. Feel free 
							to dive into the codebase of any project that catches your eye and share your insights, suggestions, or contributions. 
							Collaboration is a cornerstone of my development journey, and I value the opportunity to learn and grow alongside others. 
							Your feedback is not only appreciated but integral to the continual refinement of these projects. Thank you for joining me 
							on this journey of innovation and discovery
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
