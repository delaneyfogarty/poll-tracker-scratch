// import functions and grab DOM elements
import { renderPoll } from './render-utils.js';

const currentGameEl = document.getElementById('current-poll-container');
const startPollButton = document.getElementById('start-poll');

const option1Input = document.getElementById('option1');
const option2Input = document.getElementById('option2');
const questionInput = document.getElementById('question-input');

const option1Label = document.getElementById('option1-name');
const option2Label = document.getElementById('option2-name');

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
	displayCurrentPoll();

});

option2AddButton.addEventListener('click', () => {
	option2Votes++;
	displayCurrentPoll();
});

option1SubButton.addEventListener('click', () => {
	option1Votes--;
	displayCurrentPoll();
});

option2SubButton.addEventListener('click', () => {
	option2Votes--;
	displayCurrentPoll();
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
	question = '';
	option1Name = '';
	option2Name = '';
	option1Votes = 0;
	option2Votes = 0;
}

function displayCurrentPoll() {
	currentPollDestination.textContent = '';

	//option1VoteText.textContent = option1Name;
	//option2VoteText.textContent = option2Name;

	const pollEl = renderPoll(question, option1Name, option2Name, option1Votes, option2Votes);

	//pollEl.classList.add('current');
	currentPollDestination.append(pollEl);
}

function displayAllPolls() {
	pastPollsArray.textContent = '';

	for (let poll of pastPollsEl) {
		const pollsEl = renderPoll(poll.question, poll.option1Name, poll.option2Name, poll.option1Votes, poll.option2Votes);
		//pollsEl.classList.add('current');
		pastPollsEl.append(pollsEl);
	}
}

  // get user input
  // use user input to update state
  // update DOM to reflect the new state
