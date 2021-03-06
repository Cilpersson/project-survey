import React from 'react';

export const Buttons = ({ setQuestion, back, forward, leftBtnText, rightBtnText }) => {
	return (
		<div className="buttonContainer">
			<button onClick={() => setQuestion(back)}>{leftBtnText}</button>
			<button type="submit" onClick={() => setQuestion(forward)}>
				{rightBtnText}
			</button>
		</div>
	);
};
