let accessToken = ;
let response_type = "token";

const redirectURI = "http://localhost:3000/";
const clientID = "2b3317b145b94ff586f8b9c4235990b3";

class Spotify extends React.Component { //is a module the same as a class?

GET "https://accounts.spotify.com/authorize";

search(term) {
  fetch("https://api.spotify.com/v1/search?type=track&q="+term+"",
  {
    headers: {Authorization: `Bearer ${accessToken}`}
  }).then((response)=>{
  if (response.ok) {
    return response.json();
  } throw new Error('Request failed!');
  }, (networkError) => {
    console.log(networkError.message);
  }).then((jsonResponse) => {
    return jsonResponse;
  });

  jsonResponse.map() = [
    { id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    },
    { id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    }
  ];
} //end of search function

getAccessToken() {
  if (window.location.href.match('access_token')) {
    let accessToken = window.location.href.match(/access_token=([^&]*)/);
    let expirTime = window.location.href.match(/expires_in=([^&]*)/);
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');
  } else {
    window.location.assign("https://accounts.spotify.com/authorize?client_id="+clientID+"&response_type=token&scope=playlist-modify-public&redirect_uri="+redirectURI+"");

  }

}

} //end of Spotify module

export default Spotify;
