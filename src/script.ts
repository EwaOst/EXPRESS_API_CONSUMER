async function getData() {
    const res = await fetch('http://localhost:3000/api/products/');

    const {result} = await res.json();

    const container = document.querySelector('.container') as HTMLElement;

    result.forEach(item => {
        const div: HTMLElement = document.createElement('div');
        div.classList.add('item');
        // div.style.border = '1px solid #000';
        // div.style.borderRadius = '5px';
        div.innerHTML = `
    <h3 id = "name">${item.name}</h3>
    <p id = "price">Sonder-Ganz-Billig ${item.price}€ !!!!</p>
`
        container.appendChild(div);
    })
}

getData();