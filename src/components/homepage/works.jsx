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
									src="./zions.jpeg"
									alt="zions"
									className="work-image"
								/>
								<div className="work-title">Zions Bancorporation</div>
								<div className="work-subtitle">
									Front-End Web Developer
								</div>
								<div className="work-duration">2023 - Present</div>
							</div>
						</div>

						<div className="works-body">
							<div className="work">
								<img
									src="./tlj-logo.webp"
									alt="zions"
									className="work-image"
								/>
								<div className="work-title">Tous Les Jours</div>
								<div className="work-subtitle">
									Barista
								</div>
								<div className="work-duration">2022 - 2023</div>
							</div>
						</div>

						<div className="works-body">
							<div className="work">
								<img
									src="./ruths-chris.png"
									alt="zions"
									className="work-image"
								/>
								<div className="work-title">Ruths Chris Steak House</div>
								<div className="work-subtitle">
									Server Assistant
								</div>
								<div className="work-duration">2020 - 2022</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
