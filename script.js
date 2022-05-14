// let API_URL : "http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}"
// const API_KEY="1ead897";

// let apiUrl=`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`;







// fetchAndDisplay(movieName);

let button=document.getElementsByTagName("Button");

let input=document. getElementById('movie-search').value;

document. getElementById('movie-search').addEventListener('change', (input) => {
   console.log(input);
  });










// function fetch data then display

async function fetchAndDisplay(movie){
    try {
        let apiUrl=`http://www.omdbapi.com/?apikey=1ead897&s=${movie}`;
        let res=await fetch(apiUrl);
        let data=await res.json();
        data=data.Search;
        displayData(data);
       
    } catch (error) {
        console.log(error);
    }

}
// create and implement function display Data
function displayData(data){
    data.forEach(movie => {
        let {Title,Year,imdbID,Type,Poster}=movie;
        // console.log(Title,Year,imdbID,Poster)
        let card=document.createElement('div');

        let title=document.createElement('p');
        title.textContent=Title;

        let year=document.createElement('p')
        year.textContent=Year;

        let id=document.createElement('p')
        id.textContent=imdbID;

        let type=document.createElement('p')
        type.textContent=Type;
        let poster=document.createElement('img')
        poster.src=Poster;
        card.append(poster,title,year,id,type);
        document.getElementById("container").append(card);


        
    });
}