// do something !
const head = document.querySelector("head")

let cssFile = document.createElement('link');
cssFile.href = "star-rating/theme.css";
cssFile.rel = 'stylesheet';dd
head.appendChild(cssFile);


let iconbox = document.createElement("link")
iconbox.href = 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css';
iconbox.rel = 'stylesheet';
head.appendChild(iconbox);


function StarRating($container) {
    let starselected = $container.querySelectorAll(".selected").length

    $container.classList.add('star-rating-container');
    const starnum = $container.getAttribute("data-max-rating");
    starinbox($container, starnum);
    const starI = $container.querySelectorAll(".bxs-star");


    let starIar = Object.keys(starI).map(function (key) {
        return [starI[key]];
    });

    let starIarr = starIar.flat();


    for (let i = 0; i < starnum; i++) {
        starIarr[i].addEventListener("click", function (starIarrindex) { addselected(starIarrindex, i) });
        starIarr[i].addEventListener("click", function (starIarrindex) { changefuntion(starIarrindex, i + 1) });
        starIarr[i].addEventListener("mousemove", function (starIarrindex) { starhover(starIarrindex, i) });
        starIarr[i].addEventListener("mouseleave", function (starIarrindex) { starremove(starIarrindex, i) });
    }


    function addselected(starIarr, n) {
        const starI = $container.querySelectorAll(".bxs-star")
        const starnum = $container.getAttribute("data-max-rating");
        
        if (n === 0) {
            for (let j = 1; j < starnum; j++) {
                starI[j].classList.remove("selected")
            }
            for (let i = 0; i <= n; i++) {
                starI[i].classList.toggle("selected");
             
            }

        } else {
            for (let j = 0; j < starnum; j++) {
                starI[j].classList.remove("selected")
            }
            for (let i = 0; i <= n; i++) {
                starI[i].classList.toggle("selected");
             
            }
        }
    }


    function starhover(starIarr, n) {
        for (let i = 0; i <= n ; i++) {
            starI[i].classList.add("hovered");
        }
    }

    function starremove() {
        for (let i = 0; i < starnum; i++) {
            starI[i].classList.remove("hovered");

        }
    }
    function changefuntion( ull, i) {
        let starselected = $container.querySelectorAll(".selected").length

        let rating_change = new CustomEvent("rating-change", { detail: starselected  });

        $container.dispatchEvent(rating_change);
    }


}

function starinbox($container, starnum) {
    for (let i = 1; i <= starnum; i++) {
        const w = document.createElement("i");
        w.classList.add("bx");
        w.classList.add("bxs-star");
        w.classList.add(i);
        $container.appendChild(w);

    }
}









export default StarRating

