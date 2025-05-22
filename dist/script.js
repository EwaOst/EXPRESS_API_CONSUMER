var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('http://localhost:3000/api/products/');
        const { result } = yield res.json();
        const container = document.querySelector('.container');
        result.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('item');
            // div.style.border = '1px solid #000';
            // div.style.borderRadius = '5px';
            div.innerHTML = `
    <h3 id = "name">${item.name}</h3>
    <p id = "price">Sonder-Ganz-Billig ${item.price}€ !!!!</p>
`;
            container.appendChild(div);
        });
    });
}
getData();
