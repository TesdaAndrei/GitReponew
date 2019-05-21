const http = new easyHTTP


//GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts',function(err, posts){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// Create Data
const data = {
    title: 'Custom page',
    body: 'This is a custom Post'
};

//  Create Post

http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

// PUT Request / Update Post
http.post('https://jsonplaceholder.typicode.com/posts/5', data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

// PUT Delete Request 
http.delete('https://jsonplaceholder.typicode.com/posts/5', function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

