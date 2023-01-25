let numEl = document.querySelector("#numEl")
let incrementBtn = document.querySelector("#incrementBtn")
let decrementBtn = document.querySelector("#decrementBtn")
let saveBtn = document.querySelector("#saveBtn")
let prevEntries = document.querySelector("#prevEntries")
let total = document.querySelector("#total")
let clearEntries = document.querySelector("#clearEntriesBtn")
let totalP = 0

incrementBtn.addEventListener("click", function() {
	numEl.textContent++
})

decrementBtn.addEventListener("click", function() {
	numEl.textContent--
	if (numEl.textContent < 0) {
		numEl.textContent = 0
	}
})

saveBtn.addEventListener("click", function() {
	prevEntries.textContent += ` ${numEl.textContent} -`
	totalP += +numEl.textContent
	total.textContent = `Total: ${totalP}`
	numEl.textContent = 0
})

clearEntries.addEventListener("click", function() {
	prevEntries.textContent = `Previous count:`
})


