let blogArray = [];
let nextId = 1;

function addBlogPost(title, author, content, datePublished, likes) {
    // Check if any parameter is empty or undefined
    if (!title || !author || !content || !datePublished || !likes) {
      return false;
    }
  
    const newBlog = {
      id: nextId++, // Assigns a unique id and increments it
      title, 
      author, 
      content, 
      datePublished, 
      likes
    };
  
    blogArray.push(newBlog); // Adds the new blog to the array
    return newBlog; // Returns the added blog object
  }

function getAll() {
    return blogArray;
  }

function readBlogPost(title) {
    const nameTitle = String(title);  
    const blog = blogArray.find((item) => item.title === nameTitle); // Finds the blog with the matching 
    if (blog) {
        return blog;
    } else {
        return false;
    }
   //return blog || false; // Returns the blog or false if not found
  }

function updateBlogPost(title, updatedDetails) {
    const blog = readBlogPost(title);
    if (blog) {
      // Update properties only if they are provided in updatedData
      if (updatedDetails.title) blog.title = updatedDetails.title;
      if (updatedDetails.author) blog.author = updatedDetails.author;
      if (updatedDetails.content) blog.content = updatedDetails.content;
      if (updatedDetails.datePublished) blog.datePublished = updatedDetails.datePublished;
      if (updatedDetails.likes) blog.likes = updatedDetails.likes;
      return blog; // Returns the updated blog object
    }
    return false; // Returns false if the blog with the provided title is not found
  }

function deleteBlogPost(title) {
    const blog = readBlogPost(title);
    if (blog) {
      const initialLength = blogArray.length;
      blogArray = blogArray.filter((blog) => blog.title !== String(blog)); // Filters out the blog with the matching title
      return blogArray.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
    }
    return false; // Returns false if the blog was not found
  }

  if (require.main === module) {

    // Add a new blog into the Array.
    let result = addBlogPost("Understanding JavaScript Closures", "Jane Doe", "A closure is the combination of a function and the lexical environment within which that function was declared", "2024-10-09", 120);
    console.log(result);
    console.log("getAll called:", getAll());
    console.log(result);
    console.log("Find the blog via title:", readBlogPost("Understanding JavaScript Closures"));
    
    console.log(
      "updateOneById called:",
       updateBlogPost(1, { title: "Javascript", author: "James Bond" })
    );
    console.log("findById called after item updated:", findById(1));
    console.log("deleteOneById called:", deleteBlogPost("Understanding JavaScript Closures"));
     console.log("findById called after item deleted:", findById(1));
  }