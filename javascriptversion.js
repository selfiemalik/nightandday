//vanilla javascript version of my "Night and Day" project

const nightButton = document.getElementById('nightmode')
const dayButton = document.getElementById('daymode')
const body = document.querySelector("body")
console.log (body)

function setNightMode(){
	body.classList.add('night')
}

nightButton.addEventListener("click", setNightMode, false)

function setDayMode(){
	body.classList.remove('night')
}

dayButton.addEventListener("click", setDayMode, false)