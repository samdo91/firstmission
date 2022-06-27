// do something!
function NewsList($container) {
    const root = $container.querySelector("#root")
    const div = document.createElement("div")
    div.classList.add("news-list-container")
    root.appendChild(div)
    const article = document.createElement("article")
    article.classList.add("news-list")
    div.appendChild(article)
    const divscroll = document.createElement("div")
    divscroll.classList.add("scroll-observer")
    root.appendChild(divscroll)
    const imgscroll = document.createElement("img")
    imgscroll.src = ("img/ball-triangle.svg")
    imgscroll.alt = ("Loading...")
    divscroll.appendChild(imgscroll)
    
 
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4 
  }
  
    let page = 1    
    const io = new IntersectionObserver(entries => {
        let divscroll1 = document.querySelector(".scroll-observer")
        entries.forEach(entry => {
            if(entry.intersectionRatio <0){
                return
            }
            if (entry.intersectionRatio >0.3) {
                const url = (`https://newsapi.org/v2/top-headlines?country=kr&page=${page}&apiKey=cff28354df79435eaa9e9f6bce7886d7`)
                axios.get(url)
                    .then(function(data){new_making(data)})
                page++  
                io.observe(document.querySelector(".scroll-observer"));
            }
            io.observe(document.querySelector(".scroll-observer"));
        })
        
         io.observe(document.querySelector(".scroll-observer"));
        
    },options)

    let divscroll1 = document.querySelector(".scroll-observer")
    io.observe(divscroll1);
}

function new_making(data) {
    const article = document.querySelector(".news-list")
    for (let i = 0; i < 5; i++) {
        const section = document.createElement("section")
        section.classList.add("news-item")
        article.appendChild(section)
        const divthumbnail = document.createElement("div")
        divthumbnail.classList.add("thumbnail")
        section.appendChild(divthumbnail)
        const athumbnail = document.createElement("a")
        athumbnail.href = (data.data.articles[i].url)
        athumbnail.target = ("_blank")
        athumbnail.rel = ("noopener noreferrer")
        divthumbnail.appendChild(athumbnail)
        const imgthumbnail = document.createElement("img")
        imgthumbnail.src = (data.data.articles[i].urlToImage)
        imgthumbnail.alt = ("thumbnail")
        athumbnail.appendChild(imgthumbnail)
        const contents = document.createElement("div")
        contents.classList.add("contents")
        section.appendChild(contents)
        const h22 = document.createElement("h2")
        contents.appendChild(h22)
        const acontents = document.createElement("a")
        acontents.href = ("https://www.ajunews.com/view/20220220180410403")
        acontents.target = ("_blank")
        acontents.rel = ("noopener noreferrer")
        acontents.innerHTML = (data.data.articles[i].title)
        h22.appendChild(acontents)
        const p = document.createElement("p")
        p.innerHTML = (data.data.articles[i].description)
        contents.appendChild(p)
     
    }

}
export default NewsList 