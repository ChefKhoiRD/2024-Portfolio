import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/homepageProjects.css";

const HomepageProjects = () => {
	return (
		<div className="homepage-projects-container">
			{INFO.homepageProjects.map((homepageProjects, index) => (
				<div className="homepage-projects-project" key={index}>
					<Project
						title={homepageProjects.title}
						description={homepageProjects.description}
						linkText={homepageProjects.linkText}
						link={homepageProjects.link}
					/>
				</div>
			))}
		</div>
	);
};

export default HomepageProjects;
