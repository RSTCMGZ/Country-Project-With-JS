const wrapper = document.querySelector(".wrapper")
const btn = document.querySelector("#nfs")
countries_data.sort((a, b) => b.population - a.population)

let enKalabalik = countries_data.slice(0, 11)

let dunyaninNufusu = countries_data.reduce((toplamNufus, ulke) => toplamNufus + ulke.population, 0)

btn.addEventListener("click", calıstır)


function calıstır() {
    wrapper.innerHTML = ""
    enKalabalik.forEach((ulke) => {
        const kapsayici = document.createElement("div")
        kapsayici.classList.add("kapsayici")
        const p = document.createElement("p")
        p.textContent = ulke.name

        const grafik = document.createElement("div")
        grafik.className = "grafik"

        const oran = document.createElement("div")
        oran.className = "oran"

        grafik.append(oran)
        oran.style.width = `${Math.round((ulke.population / dunyaninNufusu) * 100)}%`

        const nufus = document.createElement("p")
        nufus.textContent = ulke.population


        kapsayici.append(p, grafik, nufus)

        wrapper.append(kapsayici)
    })
}




// let dilleriBulma = countries_data.reduce((acc, ulke) => {
//     return acc.concat(ulke.languages)
// }, [])
// let diller = countries_data.reduce((acc, diller) => {
//     if (!acc[diller.languages]) {
//         acc[diller.languages] = []
//     }
//     acc[diller.languages].push(diller)
//     return acc
// }, {})
// console.log(diller);
// console.log(dilleriBulma);