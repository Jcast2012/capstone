const api_url = '	"https://api.chucknorris.io/jokes/5JK43kLSRC24Z_bMShU6dw"'
function getChuck(){
    const response = awaitfetch(api_url);
    const data = awaitresponse.jason();
    console.log(data);
}

getChuck();