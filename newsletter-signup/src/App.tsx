import './App.css'
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import iconSucess from '../assets/images/icon-success.svg';
import iconList from '../assets/images/icon-list.svg';

function App() {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<h1>Stay updated!</h1>

			<p>Join 60,000+ product managers receiving monthly updates on:</p>

			<ul>
				<li><img src={iconList}/> Product discovery and building what matters</li>
				<li><img src={iconList}/> Measuring to ensure updates are a success</li>
				<li><img src={iconList}/> And much more!</li>
			</ul>

			<div>
				<label htmlFor="email">Email address</label>
				<input type="email" id="email" name="email" />

				<button onClick={() => setVisible(true)}>Subscribe to monthly newsletter</button>
			</div>

			<Dialog header={<img src={iconSucess} alt="Success" />} visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
				<h1>Thanks for subscribing!</h1>
				<p>
					A confirmation email has been sent to ash@loremcompany.com. 
					Please open it and click the button inside to confirm your subscription.
				</p>
				<button onClick={() => setVisible(false)}>Dismiss message</button>
			</Dialog>					
		</>
	)
}

export default App
