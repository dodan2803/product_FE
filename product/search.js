function searchByName() {
    let inSearch = document.getElementById("name").value;
    axios.get(`http://localhost:8080/products/search?name=${inSearch}`).then(function (response) {
            let productList = response.data;
            let html = ` <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th colspan="2">Action</th>
        </tr>`
            for (let i = 0;i < productList.length; i++) {
                html += `        
        <tr>
            <td>${productList[i].id}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].quantity}</td>
            <td>${productList[i].category.name}</td>
            <td><button onclick="showFormEdit(${productList[i].id})">Sửa</button></td>
            <td><button onclick="remove(${productList[i].id})">Xóa</button></td>
        </tr>`
            }
            html += '</table>'
            document.getElementById("main").innerHTML = html;
        })
}

function findByPrice() {
    let minPrice = document.getElementById("minPrice").value;
    let maxPrice = document.getElementById("maxPrice").value;
    axios.get(`http://localhost:8080/products/price?min=${minPrice}&max=${maxPrice}`).then(function (response) {
            let productList = response.data;
            let html = ` <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th colspan="2">Action</th>
        </tr>`
            for (let i = 0;i < productList.length; i++) {
                html += `        
        <tr>
            <td>${productList[i].id}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].quantity}</td>
            <td>${productList[i].category.name}</td>
            <td><button onclick="showFormEdit(${productList[i].id})">Sửa</button></td>
            <td><button onclick="remove(${productList[i].id})">Xóa</button></td>
        </tr>`
            }
            html += '</table>'
            document.getElementById("main").innerHTML = html;
        })
}