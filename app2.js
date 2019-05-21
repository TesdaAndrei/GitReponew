// ES56 PROMISES
// OBject nasa curly braces Brooow ! 
// Object to si Posts
const posts = [{ title: 'Post one', body: 'this is post one', }, { title: 'Post two', body: 'this is post two' }];

function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = false ;

            if(!error){
                resolve();
            } else {
                reject('Error: Something went Wrong');
            }

        }, 2000);
    });
   
}
// get Post
// si Set Time out laging may  call Back bess
function getPost(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000); 
}

createPost({title: 'Post Three', body: 'this is post three'})
.then(getPost)
.catch(function(err){
    console.log(err);
});

