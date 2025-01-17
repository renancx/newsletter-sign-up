import './App.css'
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import iconSucess from '../assets/images/icon-success.svg';
import iconList from '../assets/images/icon-list.svg';

function App() {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<div className="container">
				<h1 className="title">Stay updated!</h1>

				<p className="">Join 60,000+ product managers receiving monthly updates on:</p>

				<ul className="">
					<li className=""><img src={iconList}/> Product discovery and building what matters</li>
					<li className=""><img src={iconList}/> Measuring to ensure updates are a success</li>
					<li className=""><img src={iconList}/> And much more!</li>
				</ul>

				<div className="">
					<label className="" htmlFor="email">Email address</label>
					<input className="" type="email" id="email" name="email" />

					<button className="" onClick={() => setVisible(true)}>Subscribe to monthly newsletter</button>
				</div>
			</div>

			<Dialog header={<img src={iconSucess} alt="Success" />} dismissableMask={true} visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
				<h1 className="title">Thanks for subscribing!</h1>
				<p className="">
					A confirmation email has been sent to ash@loremcompany.com. 
					Please open it and click the button inside to confirm your subscription.
				</p>
				<button className="" onClick={() => setVisible(false)}>Dismiss message</button>
			</Dialog>					
		</>
	)
}

export default App
