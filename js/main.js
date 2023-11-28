window.onload = init;

function init() {
    document.getElementById("fetchButton").addEventListener("click", fetchData);
}

function showUserInfo(user) {
    document.getElementById('userSelector').style.display = 'none';
    document.getElementById('userInfo').style.display = 'block';
    document.getElementById('userName').innerText = user;

    // Show the new section
    document.getElementById('newSection').style.display = 'block';
}

function fetchData() {
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
            console.log(data);
            document.getElementById("apiOutput").innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            // Handle errors here
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById("apiOutput").innerText = 'Error: ' + error.message;
        });
}