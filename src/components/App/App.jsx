import React, {useState, useEffect} from 'react';
import css from './App.module.css';

import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const feedbackTypes = ['Good', 'Neutral', 'Bad'];
const LS_KEY = 'feedback-data';

export default function App() {
	const [feedback, setFeedback] = useState({
			good: 0,
			neutral: 0,
			bad: 0,
	});
	console.log(feedback);

	useEffect(() => {
		const savedFeedback = localStorage.getItem(LS_KEY);
		
		if (savedFeedback) {
			try{
				const parsed = JSON.parse(savedFeedback);
				setFeedback(parsed);
			} catch (error) {
				console.error('Error parsing feedback data from localStorage:', error);
			}
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(LS_KEY, JSON.stringify(feedback));
	}, [feedback]);

	const updateFeedback = (feedbackType) => {
		setFeedback((prevState) => ({
			...prevState,
			[feedbackType]: prevState[feedbackType] + 1
		}));
	}
	
	const handleResetFeedback = () => {
		setFeedback({
			good: 0,
			neutral: 0,
			bad: 0,
		});
	}

	const totalFeedback = Object.values(feedback).reduce((acc, value) => acc + value, 0);

	return (
		<div>
			<Description 
				title='Sip Happens Café' 
				text='Please leave your feedback about our service by selecting one of the options below.'
			/>

			<Options 
				buttons={feedbackTypes} 
				onUpdate={updateFeedback}
				onReset={handleResetFeedback}
				totalFeedback={totalFeedback}
			/>
			
			{totalFeedback === 0 
				? <Notification message='No feedback yet' />
				: <Feedback 
					feedback={feedbackTypes} 
					value={feedback} 
					totalFeedback={totalFeedback} 
				  />
			}	
		</div>
	) 
}