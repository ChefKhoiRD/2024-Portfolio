import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/card.css";
import INFO from "../../data/user";

const Card = (props) => {
	const { icon, title, body } = props;
	return (
		<div className="card">
			<div className="card-container">
				<div className="card-header">
					<div className="card-icon">
					<a
						href={INFO.socials.linkedin}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon 
							icon={icon} 
							className="homepage-social-icon"
						/>
					</a>
					</div>
					<div className="card-title">{title}</div>
				</div>
				<div className="card-body">
					<div className="card-text">{body}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
