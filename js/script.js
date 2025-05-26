const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

//cria o elemento para exibir o nome da cor selecionada
const colorNameDisplay = document.createElement('p');
colorNameDisplay.id = 'color-name-display';
colorNameDisplay.style.fontSize = '1.2rem';
colorNameDisplay.style.fontWeight = 'bold';
colorNameDisplay.style.marginTop = '1rem';

//adiciona o elemento apos a imagem do produto
image.parentNode.insertBefore(colorNameDisplay, image.nextSibling);

//mapeamento dos ids para nomes das cores
const colorNames = {
    'green': 'Verde-alpino',
    'silver': 'prateado', 
    'golden': 'dourado',
    'grafite': 'Grafite',
    'blue': 'Azul'
};

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        buttons.forEach((btn) =>
            btn.querySelector(".color").classList.remove("selected")
        );


        const button = e.target;
        const id = button.getAttribute("id");
        button.querySelector(".color").classList.add("selected");
        image.classList.toggle("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);

        //atualizar o teste do nome da cor selecionada
        colorNameDisplay.textContent = `cor selecionada: ${colorNames[id]}`;
    });
});
