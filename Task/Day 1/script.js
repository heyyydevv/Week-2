
const button = document.getElementById('Button');
const paragraph = document.getElementById('Paragraph');


function handleClick() {
    alert("Button was clicked!");
    paragraph.textContent = "The button was clicked!";
}


button.addEventListener('click', handleClick);
