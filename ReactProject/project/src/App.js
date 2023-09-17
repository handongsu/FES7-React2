import React, { useState } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import InputTime from './components/InputTime'
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function App() {
	const [enteredModal, setEnteredModal] = useState(false);
	
	return (
		<div>
			<Header />
			<Section />
			<InputTime setEnteredModal={setEnteredModal}/>
			<Footer/>
			{enteredModal === true ? <Modal setEnteredModal={setEnteredModal}/> : null}
		</div>
	)
}