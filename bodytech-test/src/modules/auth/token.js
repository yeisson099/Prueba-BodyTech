export const data = {
    "REDIRECT_URI": "http://localhost:3000",
    "CLIENT_ID": "2e763d3082dd4f84a2b04eccbc419fe0",
    "CLIENT_SECRET": "088a8a44b4364f1a8957a94cd18f3bce"
}
const apiAuth = 'https://accounts.spotify.com/authorize';
export const URL = `${apiAuth}?client_id=${data.CLIENT_ID}&response_type=token&redirect_uri=${data.REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&show_dialog=true`;


export const getToken = () => {
    return window.location.hash
        .substr(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial
        }, {})
}
