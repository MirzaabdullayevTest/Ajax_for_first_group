window.addEventListener('load', function (e) {
    const url = 'https://jsonplaceholder.typicode.com/users' // free face users

    function sendXMLHTTPRequest(method, url, body) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest() // ajax turidagi so'rov // serverga so'rov qilidi
            // Metod turlari: GET, POST 
            // GET => serverdan nimadir olib o'qish
            // POST => serverga nimadir jo'natib yaratish

            xhr.open(method, url)
            // qaysi metodda va qaysi url da so'rov berayotganimiz

            xhr.responseType = 'json'  // massivga aylantirdik

            xhr.setRequestHeader('Content-type', 'application/json')

            xhr.onload = function () {
                // console.log(xhr.response); /// json yani string formatda javob keldi
                // console.log(JSON.parse(xhr.response));  // JSON bu global obyekt uni parse metodi string dan massivga  aylantirib beradi
                // console.log(xhr.response);
                if (xhr.status < 400) {
                    // console.log(xhr.response);
                    resolve(xhr.response)
                } else {
                    // console.error('Siz xato yo`nalish kiritdingiz!', xhr.status);
                    reject('Siz xato yo`nalish kiritdingiz!' + xhr.status)
                }
            }

            xhr.send(JSON.stringify(body)) // object jo'natib bo'midi// bu yerda faqat json/ yani string format jo'natiladi
        })
    }

    // sendXMLHTTPRequest('GET', url)
    //     .then((users) => {
    //         console.log(users, 'Then response1');
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     })

    // sendXMLHTTPRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    //     .then((users) => {
    //         console.log(users, 'Then response2');
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     })

    const user = {
        name: 'Toxir',
        age: 25
    }

    sendXMLHTTPRequest('POST', url, user)
        .then((users) => {
            console.log(users, 'Then responsed with method POST ');

            document.querySelector('.dom').innerHTML = users.name
        })
        .catch((err) => {
            console.error(err);
        })
});


