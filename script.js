var pokedex;
const url = 'https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json'

//Lectura de json
const request = new XMLHttpRequest();
request.open('GET', url, true);
request.send();
request.onreadystatechange = function(){
    if(this.readyState==4 && this.status ==200){
        pokedex = JSON.parse(this.responseText);
        console.log(pokedex);
    }
}