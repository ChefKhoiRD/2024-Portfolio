import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const encode = (data) => {
        Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/', {
            method: 'Post',
            headers: { 'content-type': 'aoolication/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', name, email, message }),
        })

        .then(() => {
            alert("Message sent")
        })

        .catch((err) => {
            alert("Error")
        })
    };

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description"/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch
						</div>
                        
                        <div className="body-container">
                            <form
                                netlify = 'true'
                                name = 'contact'
                                onSubmit = {handleSubmit}
                            >
                            {/* Form name input */}
                            <div className = 'name-input'>
                                <label htmlFor = 'name' className = 'name'>
                                    Name
                                </label>
                                <input
                                    type = 'text'
                                    id = 'name'
                                    name = 'name'
                                    onChange = {(e) => setName(e.target.value)}
                                />
                            </div>

                            {/* Form email input */}
                            <div className = 'email-input'>
                                <label htmlFor = 'email' className = 'email'>
                                    Email
                                </label>
                                <input
                                    type = 'text'
                                    id = 'email'
                                    name = 'email'
                                    onChange = {(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Form message input */}
                            <div className = 'message-input'>
                                <label htmlFor = 'message' className = 'message'>
                                    What can I help you with?
                                </label>
                                <textarea
                                    type = 'text'
                                    id = 'message'
                                    name = 'message'
                                    rows = '12'
                                    onChange = {(e) => setMessage(e.target.value)}
                                />
                            </div>

                                {/* Submit button */}
                                <button
                                    type = 'submit'
                                    className = 'submit-button'
                                >
                                    Submit
                                </button>

                                </form>

                            <div className="socials-container">
                                <div className="contact-socials">
                                    <Socials />
                                </div>
                            </div>
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

export default Contact;