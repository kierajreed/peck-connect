import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {GameOverData} from '../game/GameData.js';

const GameOverPanel = (props) => {
    let headerText = props.winningTeam != -1 ? `Winner: ${props.teams[props.winningTeam].name}` : 'It\'s a tie!';
	return [
		<div key="tiles" className="row flex-fill">
			<div className="col d-flex flex-column justify-content-center">
				<div className="container">
					<h1 style={{fontSize: "5em"}}>Game over!</h1>
				</div>
                <div className="container">
					<h1>{headerText}</h1>
				</div>
			</div>
		</div>
	];
};
GameOverPanel.propTypes = {};

export default GameOverPanel;
