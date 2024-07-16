// Your code here


// Define an array of movie objects 
const movies = [
    {
        title: "Uderwater 1",
        runtime: 120,
        description: "Action , Witty , Comedy",
        showtime: "12:00 PM",
        ticketsRemaining: 50,
        poster: "assets/movie1.jpg"
    },
    {
        title: "Avatar: The last Airbender",
        runtime: 105,
        description: "Animation, Kids, Action",
        showtime: "3:00 PM",
        ticketsRemaining: 30,
        poster: "assets/movie2.jpg"
    }
];
//we need to use the fetch function to retrieve data for the first movie.
document.addEventListener("DOMContentLoaded", function () {
    let currentMovie = null;

    // Fetch data for the first movie
    fetch("http://localhost:3000/films/1")
        .then(response => response.json())
        .then(data => {
            currentMovie = data;
            displayMovieDetails(data);
        })
        .catch(error => {
            console.error("Error fetching movie data:", error);
            alert("Error fetching data, please try again.");
        });

    // Fetch data for all movies
    fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(data => {
            const filmsList = document.getElementById("films");
            data.forEach(movie => {
                const li = document.createElement("li");
                li.textContent = movie.title;
                filmsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching films:", error);
        });
});

function displayMovieDetails(movie) {
    const movieDetails = document.getElementById("movie-details");
    movieDetails.innerHTML = `
        <div>
            <img src="${movie.poster}" alt="${movie.title}" />
        </div>
        <div>
            <h2>${movie.title}</h2>
            <p><strong>Runtime:</strong> ${movie.runtime} minutes</p>
            <p><strong>Showtime:</strong> ${movie.showtime}</p>
            <p><strong>Available Tickets:</strong> ${movie.ticketsRemaining}</p>
            <p>${movie.description}</p>
            <button class="buy-ticket">Buy Ticket</button>
        </div>
    `;

    // Add event listener to the "Buy Ticket" button using event delegation
    movieDetails.addEventListener("click", function (event) {
        if (event.target.classList.contains("buy-ticket")) {
            buyTicket(currentMovie);
        }
    });
}

function buyTicket(movie) {
    if (movie.ticketsRemaining > 0) {
        if (confirm("Proceed to buy ticket?")) {
            movie.ticketsRemaining--;
            const availableTicketsElement = document.querySelector("#movie-details > div > p:nth-child(4)");
            availableTicketsElement.textContent = `Available Tickets: ${movie.ticketsRemaining}`;
            if (movie.ticketsRemaining === 0) {
                const buyTicketButtons = document.querySelectorAll(".buy-ticket");
                buyTicketButtons.forEach(button => {
                    button.disabled = true;
                    button.textContent = "Sorry Sold Out";
                });
            }
        }
    }}