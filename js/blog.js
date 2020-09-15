(function(){
    "use strict";

    $.ajax("data/blog.json").done(function(data) {
        console.log(data);
        let blogPost = "";
        for(let i = 0; i < data.length; i++){
            blogPost +=
                "<div>"+
                "<h2>"+ data[i].title +"</h2>"+
                "<h6> Theme: "+ data[i].categories +"</h6>"+
                "<p>"+ data[i].date +"</p>"+
                "<p>"+ data[i].content +"</p>"+
                "</div>";
        }
        $('#posts').append(blogPost);
    });



})();