const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
var MainImg = document.getElementById("MainImage");
        var smallimg = document.getElementsByClassName("small-img");

        smallimg[0].onclick = ()=> {
            MainImg.src = smallimg[0].src;
        }
        smallimg[1].onclick = () => {
            MainImg.src = smallimg[1].src;
        }
        smallimg[2].onclick = () => {
            MainImg.src = smallimg[2].src;
        }
        smallimg[3].onclick = () => {
            MainImg.src = smallimg[3].src;
        }
        smallimg[4].onclick = () => {
            MainImg.src = smallimg[4].src;
        }


if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}

