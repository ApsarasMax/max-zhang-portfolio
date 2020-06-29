function onloadTasks(){
    let imgPath = getImgPath();
    document.getElementById('main-travel-image').src=imgPath;
    loadComments(imgPath);
}

function addComment(e){
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let imgPath = document.getElementById('main-travel-image').src;
    let imgPathLite = getUniquePath(imgPath);

    const requestPost = new Request("/new-comment?name-input="+name+"&email-input="+email+"&comment-input="+message+"&img-path="+imgPathLite, {method:'POST'});
    fetch(requestPost);
    loadComments(imgPath);
    // fetch(requestPost).then((response) => {
    //     console.log("Get Response");
    //     // if (!response.ok) {
    //     //     alert("Name already exists. Please pick another.");
    //     // } else{
    //     //     return this.loginInfo();
    //     // }
    // })

}


/** Fetches comments from the server and adds them to the DOM. */
function loadComments(imgPath) {
    let imgPathLite = getUniquePath(imgPath);
    const requestGet = new Request("/list-comments?img-path="+imgPathLite, {method:'GET'});

  fetch(requestGet).then(response => response.json()).then((comments) => {
    const commentListElement = document.getElementsByClassName('comment-item');
    if(comments.length == 0){
        fillCommentIntoItem(commentListElement[0],{name:"(Be the first to comment on this image!)",comment:""});
    }else{
        let numOfComment = 3;
        for(let i=0;i<numOfComment;i++){
            let commentElement = commentListElement[i];
            let comment = comments[i];
            if(commentElement && comment){
                fillCommentIntoItem(commentElement, comment);
            }
        }
    }

  });
}

/** Fill the comment into according comment. */
function fillCommentIntoItem(commentElement, comment){
    const userNameElement = commentElement.getElementsByClassName('user-name')[0];
    const commentContentElement = commentElement.getElementsByClassName('comment-content')[0];
    if(!userNameElement || !commentContentElement){
        return;
    }
    userNameElement.innerText = comment.name;
    commentContentElement.innerText = comment.comment;

}

function getImgPath(){
    let url = window.location.href;
    let regex = new RegExp('[?&]' + 'img' + '(=([^&#]*)|&|#|$)');
    let results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getUniquePath(url){
    // let url = window.location.href;
    let regex = /(\S+)(images-per-country)(\S+)/;
    let results = regex.exec(url);
    if (!results) return null;
    if (!results[3]) return '';
    return results[3];
}