const availFlights = [
    { country: "Germany", price: 1000 },
    { country: "Italy", price: 920 },
    { country: "Greece", price: 721 },
    { country: "Jamaica", price: 830 },
    { country: "Dominican Republic", price: 589 },
    { country: "Haiti", price: 312 },
    { country: "Brazil", price: 603 },
    { country: "Argentina", price: 1256 },
    { country: "Guyana", price: 578 },
]

let walletBal = 150000;

// ("div")[0] targets the first div on the page
//const div = document.getElementsByTagName("div")[0];
const divAvailFlights = document.getElementById("flightsContainer");

function showFlights() {
    // Clear the existing content
    divAvailFlights.innerHTML = "";
    
    for (let i = 0; i < availFlights.length; i++) {
        const paragraph = document.createElement("p");
        paragraph.textContent = `${i + 1} Country: ${availFlights[i].country}, Price: ${availFlights[i].price}`;
        divAvailFlights.appendChild(paragraph);
    }
}

showFlights();

// Get the button for booking a flight
const bookFlightButton = document.getElementById("bookingFlight");

// Get the div to display the booking message
const bookingMessageContainer = document.getElementById("bookingMessageContainer");

bookFlightButton.addEventListener('click', function() {
    // Create and append the booking message paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = `Enter a number from the list to book that flight`;
    bookingMessageContainer.appendChild(paragraph);

    // Create and append the input field
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "flightNumberInput");
    bookingMessageContainer.appendChild(input);

    // Event listener for input change
    input.addEventListener('change', function() {
        const flightNumber = parseInt(input.value);
        if (flightNumber > 0 && flightNumber <= availFlights.length) {
            const selectedFlight = availFlights[flightNumber - 1];
            alert(`You have selected to book a flight to ${selectedFlight.country} for $${selectedFlight.price}.`);

            // Remove the selected flight from the array
            availFlights.splice(flightNumber - 1, 1);

            // Refresh the display of available flights
            showFlights();
            
            // Clear the booking message and input field
            bookingMessageContainer.innerHTML = "";
        } else {
            alert("Invalid flight number. Please enter a valid number.");
        }
    });
});