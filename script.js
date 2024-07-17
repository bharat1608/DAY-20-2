// script.js

/**
 * Fetch a random joke from the JokeAPI
 */
function fetchJoke() {
  fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const jokeContainer = document.getElementById('jokeContainer');
      if (data.type === 'twopart') {
        jokeContainer.innerHTML = `
          <p>${data.setup}</p>
          <p>${data.delivery}</p>
        `;
      } else {
        jokeContainer.innerHTML = `
          <p>${data.joke}</p>
        `;
      }
    })
    .catch(error => {
      console.error('Error fetching joke data:', error);
    });
}

// Add event listener to fetch a joke when the button is clicked
document.getElementById('getJokeBtn').addEventListener('click', fetchJoke);

// Fetch a joke on page load
fetchJoke();

  
  
  