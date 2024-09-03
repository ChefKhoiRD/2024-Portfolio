import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Educations = () => {
	return (
		<div className="education">
			<Card
				icon={faBook}
				title="Education"
				body={
					<div className="educations-body">
						<div className="educations">
							<img
								src="./UofU.png"
								alt="U of U Logo"
								className="education-image"
							/>
							<div className="education-title">University of Utah Professional Education Boot Camps</div>
							<div className="education-subtitle">
								Certificate, Web Development
							</div>
							<div className="education-duration">2022</div>
						</div>
						<div className="educations">
							<img
								src="./slcc-logo.jpg"
								alt="SLCC Logo"
								className="education-image"
							/>
							<div className="education-title">University of Utah Professional Education Boot Camps</div>
							<div className="education-subtitle">
								Certificate, Web Development
							</div>
							<div className="education-duration">2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Educations;
