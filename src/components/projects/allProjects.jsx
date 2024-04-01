import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.allProjects.map((allProjects, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						title={allProjects.title}
						description={allProjects.description}
						linkText={allProjects.linkText}
						link={allProjects.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
