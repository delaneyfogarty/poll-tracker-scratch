// import functions and grab DOM elements
const form = document.querySelector('form');
const currentPollEl = document.getElementById('current-poll');

const option1NameEl = document.querySelector('option1name');
const option1ScoreEl = document.querySelector('option1score');
const option2NameEl = document.querySelector('option2name');
const option2ScoreEl = document.querySelector('option2Score');
const finishPollButton = document.getElementById('finish-poll');

const option1AddButton = document.getElementById('option1-add');
const option2AddButton = document.getElementById('option2-add');
const option1SubButton = document.getElementById('option1-sub');
const option2SubButton = document.getElementById('option2-sub');

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

	resetState();
	displayCurrentPoll();
	displayList();

});


  // get user input
  // use user input to update state
  // update DOM to reflect the new state
