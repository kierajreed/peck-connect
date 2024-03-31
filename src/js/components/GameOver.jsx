import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {GameOverData} from '../game/GameData.js';

const GameOverPanel = (props) => {
    let winningTeamName = props.teams[(props.teams[0].score > props.teams[1].score ? 0 : 1)].name;
	return [
		<div key="tiles" className="row flex-fill">
			<div className="col d-flex flex-column justify-content-center">
				<div className="container">
					<h1 style={{fontSize: "5em"}}>Game over!</h1>
				</div>
                <div className="container">
					<h1>Winner: {winningTeamName}</h1>
				</div>
			</div>
		</div>
	];
};
GameOverPanel.propTypes = {};

export default GameOverPanel;
