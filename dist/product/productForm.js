var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector('#input');
form.addEventListener('submit', (e) => {
    sendData();
    e.preventDefault();
});
function sendData() {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = new FormData(form);
        let prod = {
            id: Number(formData.get('id')),
            name: String(formData.get('name')),
            price: Number(formData.get('price'))
        };
        yield fetch('http://localhost:3000/api/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prod)
        });
    });
}
