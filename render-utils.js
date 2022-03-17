export function renderPoll(question, option1Name, option2Name, option1Votes, option2Votes) {
	const div = document.createElement('div');
	const questionEl = document.createElement('h1');
	const option1Div = renderOption(option1Name, option1Votes);
	const option2Div = renderOption(option2Name, option2Votes);

	div.append(questionEl, option1Div, option2Div);

	div.classList.add('poll');

	return div;
}

export function renderOption(quest, name, votes) {
	const optionDiv = document.createElement('div');
	const questionDiv = document.createElement('div');
	const nameDiv = document.createElement('p');
	const voteDiv = document.createElement('p');

	questionDiv.textContent = quest;
	nameDiv.textContent = name;
	voteDiv.textContent = votes;

	optionDiv.append(questionDiv, nameDiv, voteDiv);

	return optionDiv;
}
