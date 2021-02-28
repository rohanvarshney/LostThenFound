function getAllPosts() {
    var posts = [];
    // return list of all posts
    return posts;
}

function searchMatchOnePost(keyword, post) {
    // return boolean if post is match to the keyword given
    // based on title and tags
    return true;
}

function searchMatch(keyword) {
    const posts = getAllPosts();
    var matchedPosts = [];
    posts.forEach(function(item, index, array) {
        if (searchMatchOnePost(keyword, item)) {
            matchedPosts.push(item);
        }
    });

    return matchedPosts;
}

