const apiKey = 'a78eb45c';
// const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=Inception`;

// fetch(apiUrl)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error('Error fetching data:', err))

document.getElementById("search-btn").addEventListener('click',() => {
    const query = document.getElementById('search-input').value;
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;
    // console.log(apiUrl);

    fetch(apiUrl)
        .then(res => res.json())
        .then(
            data => {
                const results = document.getElementById('movie-results');
                // console.log(results);
                
                results.innerHTML = ''

                if(data.Search) {
                    data.Search.forEach(movie => {
                        const movieElement = document.createElement('div');
                        movieElement.classList.add('movie')
                        movieElement.innerHTML = `
                            <img src="${movie.Poster}" alt="${movie.Title}">
                            <div>
                                <h2>${movie.Title}</h2>
                                <p>Year: ${movie.Year}</p>
                                <p>Type: ${movie.Type}</p>
                                <button onclick="fetchMovieDetails('${movie.imdbID}')">More Info</button>
                            </div>
                        `;
                        results.appendChild(movieElement);
                    });
                } else {
                    results.innerHTML = '<p>No Results Found</p>'
                }
            }
        ).catch (
            err => console.error('Error fetching data:', err)
        )
});

function fetchMovieDetails(imdbID) {
    const detailsUrl = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`;

    fetch(detailsUrl)
        .then(response => response.json())
        .then(data => {
            const movieElement = document.createElement('div');
            movieElement.innerHTML = `
                <h3>${data.Title}</h3>
                <p>Plot: ${data.Plot}</p>
                <p>Director: ${data.Director}</p>
                <p>Actors: ${data.Actors}</p>
            `;
            document.getElementById('movie-results').appendChild(movieElement);
        })
        .catch(error => console.error('Error fetching details:', error));
}

function fetchMovieDetails(imdbID) {
    const details = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`;

    fetch(details)
        .then(res => res.json())
        .then(
            data => {
                const modal = document.getElementById('movie-modal');
                const modalDetails = document.getElementById('modal-details');

                modalDetails.innerHTML = `
                    <h3>${data.Title}</h3>
                    <p>Plot: ${data.Plot}</p>
                    <p>Director: ${data.Director}</p>
                    <p>Actors: ${data.Actors}</p>
                `;

                modal.style.display = "block";
            }
        )
        .catch(err => console.log(err)
        );
}