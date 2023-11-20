const doc = document.getElementsByTagName("body");

doc[0].addEventListener("load", (e) => {
	handleDark()
})
const handleDark = () => {
	const elem = document.getElementById("themeSwitcher");
	elem.click()
}