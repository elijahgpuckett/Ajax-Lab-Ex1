function getall() {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function (list) {
        console.log(list);
        let output = $("#output")
        output.text(JSON.stringify(list))
    })
}

function getid10() {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=10', function (list) {
        console.log(list);
        let output = $("#output")
        output.text(JSON.stringify(list))
    })
}

function getcomments12() {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments?id=12', function (list) {
        console.log(list);
        let output = $("#output")
        output.text(JSON.stringify(list))
    })
}

function getposts2() {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/db', {id: 2}, function (list) {
        console.log(list);
        let output = $("#output")
        output.text(JSON.stringify(list))
    })
}

function createNewPost() {
    $.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{
        userId: 1,
        title: "My New Post",
        body: "This is the body"
    }, function(list){
        console.log(list)
    })
}

function replacePost() {
    $.ajax({
        method: 'PUT',
        url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',
        data: {
            userId: 1,
            title: "New Post",
            body: "New post added"
        },
        complete: function(list){
            console.log(list.responseJSON);
        }
    })
}