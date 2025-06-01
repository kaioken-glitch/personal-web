//function to count page visits and store in localStorage and display on the page in a div with id "visitCount"
function countPageVisits() {
    // Get the current visit count from localStorage, or initialize it to 0 if it doesn't exist
    let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;

    // Increment the visit count
    visitCount++;

    // Store the updated visit count back in localStorage
    localStorage.setItem('visitCount', visitCount);

    // Display the visit count in the div with id "visitCount"
    document.getElementById('visitCount').innerText = `Page visits: ${visitCount}`;
}
// Call the function to count page visits when the script loads   
countPageVisits();