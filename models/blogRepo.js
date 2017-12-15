const fs = require("fs");
const path = require('path');
const filePath = path.join(__dirname, "data");
const fileName = path.join(filePath, "postData.json");

/* let blogList = [
    {linkName: "blog1",
    title: "Blog1 Title",
    postContent: "<h1>Blog 1</h1><p>Welcome to Blog 1.  This is an awesome blog.  Check out Blog #2 for a more awesome post.</p>",
    author: "Me"},
    {linkName: "blog2",
    title: "Blog2 Title",
    postContent: "<h2>Blog 2</h2><p>Welcome to Blog 2.  Wow! You are so lucky to be here.  This is so super awesome! </p>", 
    author: "Me"}
]; */

let blogList = [];

let savePosts = ()=>{
    fs.writeFile(fileName, JSON.stringify(blogList), (err)=>{
        if(err) {
            console.log("Error writing file!  Abort!" + err.message);
            throw(err);
        }else{
            console.log("The file: " + fileName + " has been saved.  Sweet!");
        }
    });
};

let loadPosts = () =>{
    fs.readFile(fileName,"utf8", (err, data)=>{
        if(err) {
            console.log("Error reading file.  Darnit! " + err.message);
            throw err;
        }else {
            console.log("File has been loaded!  Yay!");
            let loadPosts = JSON.parse(data);
            blogList = loadPosts;
        }

    });
};


let repository = {
    dataSource : "Filesystem",
    postCount : blogList.length,
    posts: ()=>{return blogList;},
    getPostByLink: (linkName)=> {
        return blogList.find((blog) => {
            return blog.linkName === linkName;
        });
    },
    addPost: (newBlog) => {
        blogList.push(newBlog);
        savePosts();

    
    }
}

loadPosts();

module.exports = repository;





       
