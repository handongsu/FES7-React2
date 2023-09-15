import React, { useState } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import InputTime from './components/InputTime'
import OutputTime from './components/OutputTime';


export default function App() {

	return (
		<div>
			<Header />
			<Section />
			<InputTime/>
		</div>
	)
}