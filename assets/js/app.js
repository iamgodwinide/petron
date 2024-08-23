
const styleBoxes1 = () => {

    Array(3).fill(0).forEach((_, i) => {
        const box = document.getElementById(`box${i + 1}`);

        const area = document.getElementById(`area${i + 1}`);

        const coords = area.coords.split(",");

        box.style.width = (Math.abs(coords[0] - coords[2])) + "px"
        box.style.height = (Math.abs(coords[1] - coords[3])) + "px"
        box.style.left = Number(coords[0]) + "px"
        box.style.top = Number(coords[1]) + "px"
    });
}

const styleBoxes2 = () => {

    Array(3).fill(0).forEach((_, i) => {
        const box = document.getElementById(`box${i + 4}`);

        const area = document.getElementById(`area${i + 4}`);

        const coords = area.coords.split(",");

        box.style.width = (Math.abs(coords[0] - coords[2])) + "px"
        box.style.height = (Math.abs(coords[1] - coords[3])) + "px"
        box.style.left = Number(coords[0]) + "px"
        box.style.top = Number(coords[1]) + "px"
    });
}

setTimeout(() => {
    if (window.innerWidth >= 360) {
        styleBoxes1()
    } else {
        styleBoxes2()
    }
}, 1200)



