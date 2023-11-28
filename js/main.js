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
            // Handle the data
            countryList = removeCountries(data);
            console.log(countryList);
            document.getElementById("apiOutput").innerText = JSON.stringify(countryList, null, 2);
        })
        .catch(error => {
            // Handle errors here
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById("apiOutput").innerText = 'Error: ' + error.message;
        });
}


function removeCountries(countryDictionary) {
    // Get an array of keys to remove
    const keysToRemove = Object.keys(countryDictionary).filter(shouldRemoveKey);

    // Create a new dictionary without the keys to remove
    const updatedCountryDictionary = Object.fromEntries(
        Object.entries(countryDictionary).filter(([key]) => !keysToRemove.includes(key))
    );

    return updatedCountryDictionary;
}

// Condition function to filter keys (keys starting with 'gb-' or 'us-')
function shouldRemoveKey(key) {
    return key.startsWith('gb-') || key.startsWith('us-');
}