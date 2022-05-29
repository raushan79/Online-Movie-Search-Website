// let API_URL : "http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}"
// const API_KEY="1ead897";

// let apiUrl=`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`;







// fetchAndDisplay(movieName);

// let button=document.getElementsByTagName("Button");

// let input=document. getElementById('movie-search').value;

// document. getElementById('movie-search').addEventListener('change', (input) => {
//    console.log(input);
//   });


let search = document.querySelector("#movie-search");
search.addEventListener("input", function () {
    // console.log(search.value);
    debounce(function () {
        console.log(search.value);
        fetchAndDisplay(search.value);

    }, 1000);
})









// function fetch data then display

async function fetchAndDisplay(movie) {
    try {
        let apiUrl = `http://www.omdbapi.com/?apikey=1ead897&s=${movie}`;
        let res = await fetch(apiUrl);
        let data = await res.json();
        data = data.Search;
        let ele = document.querySelector("#container");
        displayMovieTitle(data, ele);

    } catch (error) {
        console.log(error);
    }

}
// create and implement function display Data
function displayData(data, appendEle) {
    appendEle.innerHTML = "";
    if (data) {
        data.forEach(movie => {
            let { Title, Year, imdbID, Type, Poster } = movie;
            // console.log(Title,Year,imdbID,Poster)
            let card = document.createElement('div');

            let title = document.createElement('p');
            title.textContent = Title;

            let year = document.createElement('p')
            year.textContent = Year;

            let id = document.createElement('p')
            id.textContent = imdbID;

            let type = document.createElement('p')
            type.textContent = Type;
            let poster = document.createElement('img')
            poster.src = Poster;
            card.append(poster, title, year, id, type);
            appendEle.append(card);



        });

    } else {
        let p = document.createElement("p");
        p.textContent = "Your search item not available"
        appendEle.append(p);
    }

}

// implement debouncing
let timerId;
function debounce(func, delay) {
    if (timerId) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(function () {
        func();
    }, delay);
};

// function display movie title
function displayMovieTitle(data, ele) {
    data.forEach((movie) => {
        let title = document.createElement("p");
        title.textContent = movie.Title;
        ele.append(title);
        
        title.onclick= function () {
            // call function show movie details
            // console.log(title);
            let titleText=title.innerText;
            // console.log(titleText);
           
            movieDetails(titleText);

        }
    });

}




// function movie details
async function movieDetails(title) {
    console.log(title);
        let appendEle=document.querySelector("container");
        // appendEle.innerHTML="";
        let apiUrl = `http://www.omdbapi.com/?apikey=1ead897&t=${title}`;
        let res = await fetch(apiUrl);
        let data = await res.json();
        console.log(data);
        
        localStorage.setItem("data",JSON.stringify(data));
        location.href="./moviedetails.html";


}



