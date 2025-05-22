const form = document.querySelector('#input')as HTMLFormElement;

form.addEventListener('submit', (e : Event) => {
    sendData();
    e.preventDefault();
});

async function sendData() {
    const formData = new FormData(form);

    let prod = {
        id: Number(formData.get('id')),
        name: String(formData.get('name')),
        price: Number(formData.get('price'))
    };

    await fetch('http://localhost:3000/api/products/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(prod)
    })
}
