import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="work-container">
						<div className="works-body">
							<div className="work">
								<img
									src="./slcc-logo.jpg"
									alt="SLCC Logo"
									className="work-image"
								/>
								<div className="work-title">Salt Lake Community College</div>
								<div className="work-subtitle">
									Web Developer
								</div>
								<div className="work-duration">August 2024 - Present</div>
							</div>
						</div>
						<div className="works-body">
							<div className="work">
								<img
									src="./zions.jpeg"
									alt="Zions Logo"
									className="work-image"
								/>
								<div className="work-title">Zions Bancorporation</div>
								<div className="work-subtitle">
									Front-End Web Developer Intern
								</div>
								<div className="work-duration">May 2023 - June 2024</div>
							</div>
						</div>
						<div className="works-body">
							<div className="work">
								<img
									src="./ruths-chris.png"
									alt="Ruths Chris Logo"
									className="work-image"
								/>
								<div className="work-title">Ruths Chris Steak House</div>
								<div className="work-subtitle">
									Server Assistant
								</div>
								<div className="work-duration">November 2020 - October 2022</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
