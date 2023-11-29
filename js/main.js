window.onload = init;

let responseData;

function init() {
    fetchCountryCodes();

    document.getElementById("fetchFlag").addEventListener("click", fetchFlagApi);
}

function showUserInfo(user) {
    document.getElementById('userSelector').style.display = 'none';
    document.getElementById('userInfo').style.display = 'block';
    document.getElementById('userName').innerText = user;

    // Show the new section
    document.getElementById('newSection').style.display = 'block';
}

function fetchCountryCodes() {
    fetch('https://flagcdn.com/es/codes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            /* Handle the data */
            //Remove unwanted values
            for (var key in data) {
                if (key.startsWith('gb-') || key.startsWith('us-')) { delete data[key]; }
            }
            responseData = data;
        })
        .catch(error => {
            // Handle errors here
            console.error('There was a problem with the fetch operation:', error);
            console.error('Error: ' + error.message);
        });
}

function fetchFlagApi() {

}