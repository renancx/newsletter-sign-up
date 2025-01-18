import './App.css'
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import iconSucess from '../assets/images/icon-success.svg';
import iconList from '../assets/images/icon-list.svg';
import illustration from '../assets/images/illustration-sign-up-desktop.svg';

function App() {
	const [visible, setVisible] = useState(false);

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
						<label className="email-title" htmlFor="email">Email address</label>
						<input placeholder="email@company.com" className="email-input" type="email" id="email" name="email" />

						<button className="btn" onClick={() => setVisible(true)}>Subscribe to monthly newsletter</button>
					</div>
				</div>
				<img className="img" src={illustration} />
			</div>

			<Dialog className="dialog" header={<img src={iconSucess} alt="Success" />} dismissableMask={true} visible={visible} onHide={() => setVisible(false)}>
				<h1 className="title">Thanks for subscribing!</h1>
				<p className="text">
					A confirmation email has been sent to ash@loremcompany.com. 
					Please open it and click the button inside to confirm your subscription.
				</p>
				<button className="btn" onClick={() => setVisible(false)}>Dismiss message</button>
			</Dialog>					
		</>
	)
}

export default App
