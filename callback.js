const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    //mimic get the data from a server
    setTimeout(function(){
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(()=> {
        posts.push(post);
        callback();
    }, 2000);
}




createPost({ title: 'Post Three', Body: 'This is post three'}, getPosts);
