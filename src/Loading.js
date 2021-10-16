import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import "./App.css";

function Loading() {
	return (
		<div className="loading">
			<CircularProgress color="inherit"/>
		</div>
	)
}

export default Loading