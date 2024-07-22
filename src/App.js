// App.js 

import './App.css'; 
import React, { useEffect, useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import BasicInfo from './components/BaseInfo';
import AdditionalQuestions from './components/AdditionalQuestions';
import {About} from './components/About'; 
import ThankYouPage from './components/ThankYouPage';
import EnteredDetails from './components/EnteredDetails';

function App() { 
const initBasicData = JSON.parse(localStorage.getItem('data')) || {}; 
const initQuestionsData = JSON.parse(localStorage.getItem('questiondata')) || {}; 

const [basicData, setBasicData] = useState(initBasicData); 
const [questionData, setQuestionData] = useState(initQuestionsData); 

useEffect(() => { 
	localStorage.setItem('data', JSON.stringify(basicData)); 
}, [basicData]); 

useEffect(() => { 
	localStorage.setItem('questiondata', JSON.stringify(questionData)); 
}, [questionData]); 

const addBasicData = (name, email, contact) => { 
	const myBasicData = { 
	name: name, 
	email: email, 
	contact: contact 
	}; 

	setBasicData(myBasicData); 

	// Update the localStorage with the new basicData 
	localStorage.setItem("data", JSON.stringify(myBasicData)); 
} 

// Function to add questionData to state and localStorage 
const addQuestionData = (profession, interest, reference) => { 
	// Create an object with the provided question data 
	const myQuestionData = { 
	profession: profession, 
	interest: interest, 
	reference: reference 
	}; 

	// Update the questionData state with the new data 
	setQuestionData(myQuestionData); 

	// Update the localStorage with the new questionData 
	localStorage.setItem("questiondata", JSON.stringify(myQuestionData)); 
} 

// Render the application 
return ( 
	<Router> 
	{/* Define the routes */} 
	<Routes> 
		{/* Render the BasicInfo component with the addBasicData function */} 
		<Route path='/' element={<BasicInfo addBasicData={addBasicData} />} /> 

		{/* Render the AdditionalQuestions component with the addQuestionData function */} 
		<Route 
		path='/questions'
		element={<AdditionalQuestions addQuestionData={addQuestionData} />} 
		/> 

		{/* Render the EnteredDetails component with basicData and questionData */} 
		<Route 
		path='/details'
		element={<EnteredDetails data={basicData} questiondData={questionData} />} 
		/> 

		{/* Render the ThankYouPage component */} 
		<Route 
		path='/thanks'
		element={<ThankYouPage />} 
		/> 

		{/* Render the About component */} 
		<Route 
		path='/about'
		element={<About />} 
		/> 
	</Routes> 
	</Router> 
); 
} 

// Export the App component as the default export 
export default App;
