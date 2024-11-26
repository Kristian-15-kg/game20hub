// Mock data for events
const events = [
  { day: "Monday", time: "10:00", court: 1, votes: [] },
  { day: "Tuesday", time: "14:00", court: 2, votes: [] },
  // Add more events here
];

let userVotes = []; // To store user's votes

// Display events
const eventGrid = document.getElementById("event-grid");
function renderEvents() {
  eventGrid.innerHTML = events
    .map((event, index) => `
      <div class="event-card">
        <h3>${event.day}</h3>
        <p>Time: ${event.time}</p>
        <p>Court: ${event.court}</p>
        <button onclick="vote(${index})">Vote</button>
      </div>
    `)
    .join("");
}
renderEvents();

// Handle voting
function vote(eventIndex) {
  if (userVotes.length >= 3) {
    alert("You can only vote for 3 events per week!");
    return;
  }

  const voteTime = new Date().toISOString();
  events[eventIndex].votes.push({ user: "User1", time: voteTime }); // Replace "User1" with actual user
  userVotes.push(events[eventIndex]);
  renderUserVotes();
}

// Display user votes
const voteList = document.getElementById("vote-list");
function renderUserVotes() {
  voteList.innerHTML = userVotes
    .map((event) => `<li>${event.day}, ${event.time}, Court ${event.court}</li>`)
    .join("");
}