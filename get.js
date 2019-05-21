const http = new EasyHTTP

// Get Users

//http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// User Data Post Method
const data = {
    name: ' John Doe',
    username: 'Johndoe',
    email: 'jdoe@gmail.com'
}
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

// http.post('jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// http.put('jsonplaceholder.typicode.com/users/1', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// http.delete('https://jsonplaceholder.typicode.com/users/1')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

