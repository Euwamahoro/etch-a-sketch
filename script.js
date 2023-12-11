// script.js

document.addEventListener('DOMContentLoaded', function () {
    const searchBox = document.getElementById('search-box');
    const resultsContainer = document.querySelector('.results');

    // Function to fetch football data from the API
    async function fetchFootballData(teamName) {
        const apiUrl = `https://www.football-api.com/api/v1/teams?name=${teamName}`;

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            return data.teams;
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return [];
        }
    }

    // Function to display search results
    function displayResults(teams) {
        resultsContainer.innerHTML = '';

        if (teams.length === 0) {
            resultsContainer.innerHTML = 'No results found.';
            return;
        }

        const list = document.createElement('ul');

        teams.forEach(team => {
            const listItem = document.createElement('li');
            listItem.textContent = team.name;
            list.appendChild(listItem);
        });

        resultsContainer.appendChild(list);
    }

    // Event listener for the search input
    searchBox.addEventListener('input', async () => {
        const searchTerm = searchBox.value.trim();

        if (searchTerm === '') {
            resultsContainer.innerHTML = '';
            return;
        }

        const teams = await fetchFootballData(searchTerm);
        displayResults(teams);
    });
});
