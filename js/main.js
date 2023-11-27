window.onload = init;

function init() {

}

function showUserInfo(user) {
    document.getElementById('userSelector').style.display = 'none';
    document.getElementById('userInfo').style.display = 'block';
    document.getElementById('userName').innerText = user;

    // Show the new section
    document.getElementById('newSection').style.display = 'block';
}