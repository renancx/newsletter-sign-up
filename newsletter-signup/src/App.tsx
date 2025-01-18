import './App.css'
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import iconSucess from '../assets/images/icon-success.svg';
import iconList from '../assets/images/icon-list.svg';
import illustration from '../assets/images/illustration-sign-up-desktop.svg';

function App() {
	const [email, setEmail] = useState('');
	const [visible, setVisible] = useState(false);

	const handleEmail = () => {
		if (!email) {
			alert('Please enter your email address');
			return;
		}

		if (!email.includes('@')) {
			alert('Please enter a valid email address');
			return;
		}

		setVisible(true);
	}

	return (
		<>
			<div className="container">
				<div className="content">
					<h1 className="title">Stay updated!</h1>

					<p className="text">Join 60,000+ product managers receiving monthly updates on:</p>

					<ul className="ul">
						<li className="li"><img src={iconList}/> Product discovery and building what matters</li>
						<li className="li"><img src={iconList}/> Measuring to ensure updates are a success</li>
						<li className="li"><img src={iconList}/> And much more!</li>
					</ul>

					<div className="form">
						<div className="email-container">
							<label className="email-title" htmlFor="email">Email address</label>
							<p className="email-title error">Valid email required</p>
						</div>

						<input placeholder="email@company.com" className="email-input" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

						<button className="btn" onClick={() => handleEmail()}>Subscribe to monthly newsletter</button>
					</div>
				</div>
				<img className="img" src={illustration} />
			</div>

			<Dialog className="dialog" maskStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} header={<img src={iconSucess} alt="Success" />} dismissableMask={true} visible={visible} onHide={() => setVisible(false)}>
				<h1 className="title">Thanks for subscribing!</h1>
				<p className="text">
					A confirmation email has been sent to {email}. 
					Please open it and click the button inside to confirm your subscription.
				</p>
				<button className="btn" onClick={() => setVisible(false)}>Dismiss message</button>
			</Dialog>					
		</>
	)
}

export default App
