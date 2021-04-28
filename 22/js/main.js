fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then(data => {
        for (var i = 0; i < 10; i++) {
            console.log(data[i].login);
            console.log(data[i].avatar_url);
            console.log(data[i].id);
        }
    })
    .catch((error) => console.log(error));
