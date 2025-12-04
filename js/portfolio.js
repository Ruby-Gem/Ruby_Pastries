
document.querySelectorAll(".mansory figure").forEach((fig) => {
    fig.addEventListener("click", () => {
        document
        .querySelector("#modalImg")
        .setAttribute("src", fig.getAttribute("data-src"));
        document.querySelector("#modalCaption").textContent =
        fig.getAttribute("data-caption");
        document.querySelector("#imgModal").showModal();
    });
});

const slides = document.querySelectorAll('.slide');

function randomFunFact() {
    slides[Math.floor(Math.random() * slides.length)].scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    })
}

document.querySelectorAll('[role="accordion-group"]').forEach(accordion => {
    const details = accordion.querySelectorAll('details');
    details.forEach(detail => {
        detail.addEventListener('toggle', (event) => {
            const toggleDetail = event.target;
            if (toggleDetail.open) {
                details.forEach(others => {
                    if (others !== toggleDetail) others.open = false;
                })
            }
        })
    })
})

