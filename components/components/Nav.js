// do something!

function nav($container) {

    const root = $container.querySelector("#root")
    const nav = document.createElement("nav")
    const ul = document.createElement("ul")
    let subject_id = ["all", "by", "business", "entertainment", "health", "science", "sports", "technology"];
    let subject_class = ["category-item active", "category-item", "category-item", "category-item", "category-item", "category-item", "category-item"]
    let subject_text = ["전체보기", "비즈니스", "엔터테인먼트", "건강", "과학", "스포츠", "기술"]
    nav.classList.add("category-list")

    root.appendChild(nav)
    nav.appendChild(ul)
    licreat(subject_id, subject_class, subject_text)

function licreat(sid, sclass, stext) {
        const ul = document.querySelector("ul")
        for (let i = 0; i < sid.length-1; i++) {
            const li = document.createElement("ul")
            li.className=sclass[i]
            li.id = sid[i]
            li.innerHTML = stext[i]
            ul.appendChild(li)
        }
    }



}


export default nav