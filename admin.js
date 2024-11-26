const adminEvents = JSON.parse(localStorage.getItem("events")) || [];

// Render events
const eventList = document.getElementById("event-list");
function renderAdminEvents() {
  eventList.innerHTML = adminEvents
    .map((event, index) => `
      <div class="event-card">
        <h3>${event.day}</h3>
        <p>Time: ${event.time}</p>
        <p>Court: ${event.court}</p>
        <button onclick="deleteEvent(${index})">Delete</button>
      </div>
    `)
    .join("");
}
renderAdminEvents();

// Add event
document.getElementById("event-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const day = document.getElementById("event-day").value;
  const time = document.getElementById("event-time").value;
  const court = document.getElementById("court-number").value;

  adminEvents.push({ day, time, court, votes: [] });
  localStorage.setItem("events", JSON.stringify(adminEvents));
  renderAdminEvents();
});

// Delete event
function deleteEvent(index) {
  adminEvents.splice(index, 1);
  localStorage.setItem("events", JSON.stringify(adminEvents));
  renderAdminEvents();
}