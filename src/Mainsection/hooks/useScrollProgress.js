import { useEffect, useContext } from "react";
import { Pcontext } from './Context'
export default function useScrollProgress(colors) {
    const { ColorDispatch, colorState } = useContext(Pcontext);
    function scrollToTop(e) {
        // console.log(e);
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    useEffect(() => {
        const progress = document.getElementById("progress");
        const progressValue = document.getElementById("progress-value");
        const scrollHandler = () => {
            let pos = document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrollValue = Math.round((pos * 100) / height);
            if (progress) {
                progress.classList.toggle("active", window.scrollY > 150);
                progress.style.background = `conic-gradient(${colorState.color[1]} ${scrollValue}%, ${colorState.color[2]} ${scrollValue}%)`;
            }
            document.addEventListener("mouseover", function (e) {
                if (e.target.classList[0] === "pror") {
                    progressValue.innerHTML = "<i class='fa-sharp fa-solid fa-arrow-up-long'></i>";
                }
                else if (scrollValue > 96) {
                    progressValue.innerHTML = `<i class="fa-sharp fa-solid fa-arrow-up-long"></i>`;
                }
                else {
                    progressValue.innerHTML = `${scrollValue}%`;
                }
            })
            progressValue.textContent = `${scrollValue}%`;
            progressValue.onclick = scrollToTop
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [colors]);
}
