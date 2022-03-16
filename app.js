// import functions and grab DOM elements
const form = document.querySelector('form');
const currentPollEl = document.getElementById('current-poll');
const currentPollDestination = document.getElementById('current-poll-destination');
const option1VoteText = document.getElementById('option1-vote-text')
const option2VoteText = document.getElementById('option2-vote-text')
const option1AddButton = document.getElementById('option1-add');
const option2AddButton = document.getElementById('option2-add');
const option1SubButton = document.getElementById('option1-sub');
const option2SubButton = document.getElementById('option2-sub');
const finishPollButton = document.getElementById('finish-poll');


const pastPollsEl = document.querySelector('past-polls');

// let state
let question = '';
let option1Name = '';
let option2Name = '';
let option1Votes = 0;
let option2Votes = 0;

const pastPollsArray = [];

// set event listeners 
option1AddButton.addEventListener('click', () => {
	option1Votes++;
	option1ScoreEl.textContent = option1Votes;

});

option2AddButton.addEventListener('click', () => {
	option2Votes++:
	option2ScoreEl.textContent = option2Votes;
});

option1SubButton.addEventListener('click', () => {
	option1Votes--
	option1ScoreEl.textContent = option1Votes;
});

option2SubButton.addEventListener('click', () => {
	option2Votes--;
	option2ScoreEl.textContent = option2Votes;
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const data = new FormData(form);

	question = data.get('question-input');
	option1Name = data.get('option1-name');
	option2Name = data.get('option2-name');

	displayCurrentPoll();
});

finishPollButton.addEventListener('click', () => {
	form.reset();

	const poll = makePoll();

	pastPollsArray.push(poll);

	displayAllPolls();
	resetState();
	displayCurrentPoll();

});

function makePoll() {

	return {
		question: question,
		option1Name: option1Name,
		option2Name: option2Name,
		option1Votes: option1Votes,
		option2Votes: option2Votes
	};
}

function resetState() {
	let question = '';
	let option1Name = '';
	let option2Name = '';
	let option1Votes = 0;
	let option2Votes = 0;
}

function displayCurrentPoll() {
	const pollEl = renderPollEl(question, option1Name, option2Name, option1Votes, option2Votes)

	currentPollDestination.textContent = '';

	option1VoteText.textContent = option1Name;
	option2VoteText.textContent = option2Name;

	currentPollDestination.append(pollEl);
}


  // get user input
  // use user input to update state
  // update DOM to reflect the new state
