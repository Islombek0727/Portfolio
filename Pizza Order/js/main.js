const orderSection = document.querySelector('section');
const orderEl = document.querySelector('.order');
let userBaskets = [];

const pizzaElPrice = {
    thin: {
        name: "Thin",
        price: 10
    },
    medium: {
        name: "Medium",
        price: 12
    },
    thick: {
        name: "Thick",
        price: 15
    },
    size25: {
        sm: 25,
        price: 10
    },
    size30: {
        sm: 30,
        price: 12
    },
    size35: {
        sm: 35,
        price: 15
    },
}

function check(name, phone, address, dough) {
    if (name.value != "" && phone.value != "" && address.value != "" && dough.value != "")
    return true;
    else return false;
}

function userOrder(cb) {
    const username = document.getElementById('username');
    const phoneNumber = document.getElementById('phoneNumber');
    const address = document.getElementById('address');
    const doughSelect = document.getElementById('dough');
    const addPizzas = document.querySelectorAll('.add_pizza input[type="checkbox"]');
    const onPizzas = document.querySelectorAll('.on_pizza input[type="checkbox"]');
    const pizaSize = document.querySelectorAll('.pizza_size input[type="radio"]');

    let Check = cb(username, phoneNumber, address, doughSelect);

    if (Check) {
        const userBasket = {
            userName: username.value,
            phoneNumber: phoneNumber.value,
            address: address.value,
            on: [],
            add: [],
            totalPrice: 0
        };

        const pizzaDough = doughSelect.value;
        userBasket.dough = pizzaElPrice[pizzaDough];
        userBasket.totalPrice += userBasket.dough.price;

        for (el of pizaSize) {
            if (el.checked) {
                userBasket.pizzaSize = pizzaElPrice[el.value];
                userBasket.totalPrice += userBasket.pizzaSize.price;
            }
        }

        for (el of onPizzas) {
            if (el.checked) {
                userBasket.on.push(el.value);
                userBasket.totalPrice += 5;
            }
        }

        for (el of addPizzas) {
            if (el.checked) {
                userBasket.add.push(el.value);
                userBasket.totalPrice += 3;
            }
        }

        userBaskets.push(userBasket);
        console.log(userBaskets);
        renderEl();
    } else {
        alert("Please Order!");
    }
}

function renderEl() {
    orderEl.innerHTML = '';
    orderSection.style.display = 'flex';    

    for (let i = 0; i < userBaskets.length; i++) {

        let onPizza = '';
        for (el of userBaskets[i].on) {
            onPizza = onPizza + el + " ";
        }

        let addPizza = '';
        for (el of userBaskets[i].add) {
            addPizza = addPizza + el + " ";
        }

        orderEl.innerHTML += `
        <div class="order-modal">
            <h1>Order: <span>${i + 1}</span></h1>
            <div class="user__info">
                <h2>Name: <span>${userBaskets[i].userName}</span></h2>
                <h2>Phone: <span>${userBaskets[i].phoneNumber}</span></h2>
                <h2>Address: <span>${userBaskets[i].address}</span></h2>
            </div>

         <div class="pizza__info">
                <h2>Dough thickness: <span>${userBaskets[i].dough.name}</span></h2>
                <h2>Size: <span>${userBaskets[i].pizzaSize.sm}</span>sm</h2>
                <h2>On pizza: <span>${onPizza}</span></h2>
                <h2>Add: <span>${addPizza}</span></h2>
            </div>

            <div class="price-total">
                <h2>Total: $<span>${userBaskets[i].totalPrice}</span></h2>
            </div>
        </div>
    `
    }

}

