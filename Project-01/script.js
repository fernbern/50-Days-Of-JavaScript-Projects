//query selector puts all panels into a node list similar to array
const panels = document.querySelectorAll('.panel');
console.log(panels);
console.log(panels[0]);
console.log(panels[1]);
console.log(panels[2]);
console.log(panels[3]);
// loop through a node list
// for each uses a function as an argument
panels.forEach((panel) => {
    console.log(panel);
    panel.addEventListener('click', () => {
        console.log(123);
        removeActiveClasses();
        panel.classList.add('active')
    })
})
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}