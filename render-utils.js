export function renderPoll(question, option1Name, option2Name, option1Votes, option2Votes) {
    const pollDiv = document.createElement('div');
    const questionEl = document.createElement('h1');
    const option1El = document.createElement('h3');
    const option2El = document.createElement('h3');
    const option1VotesEl = document.createElement('p');
    const option2VotesEl = document.createElement('p');

    questionEl.textContent = question;
    option1El.textContent = option1Name;
    option2El.textContent = option2Name;
    option1VotesEl.textContent = option1Votes;
    option2VotesEl.textContent = option2Votes;

    pollDiv.append(questionEl, option1El, option2El, option1VotesEl, option2VotesEl);

    return pollDiv;
}

