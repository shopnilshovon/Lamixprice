const list = document.getElementById('list');

function render(data){

    list.innerHTML = data.map(item => `

        <div class="country">

            <div class="name">
                🌍 ${item.country}
            </div>

            <div class="price">
                $${item.price}
            </div>

        </div>

    `).join('');
}

function searchCountry(){

    const q = document
        .getElementById('search')
        .value
        .toLowerCase();

    const filtered = prices.filter(item =>
        item.country.toLowerCase().includes(q)
    );

    render(filtered);
}

render(prices);
