function onloadTasks(){
//    alert("hi");
}

function filterArticles(filter){
    const subheading = document.getElementById("subheading");
    subheading.innerHTML=filter;

    if(filter==='All'){
        let articles = document.getElementsByClassName("article");
        for(let article of articles){
            article.style.display="";
        }
        return;
    }

    const requestGet = new Request("/filter-articles?filter="+filter, {method:'GET'});

    fetch(requestGet).then(response => response.json()).then((articleIndices) => {
        let articles = document.getElementsByClassName("article");
        for(let article of articles){
            if(article.id){
                let reg=/index-(\d+)/;
                let idx = parseInt(reg.exec(article.id)[1]);
                if(!articleIndices.includes(idx)){
                    article.style.display="none";
                }else{
                    article.style.display="";
                }

            }
        }
  });
}

function alerttesting(){
    alert("hi");
}
