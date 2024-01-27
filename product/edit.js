function showFormEdit(id) {
    axios.get('http://localhost:8080/products').then(function (response) {
            let product
            let productList = response.data;
            for (let i = 0; i < productList.length; i++) {
                if (productList[i].id === id) {
                    product  = productList[i]
                }
            }
            axios.get('http://localhost:8080/category')
                .then(function (response) {
                    let category = response.data;
                    let html = ` 
                    <div>
                    <input type="text" id="id" value="${product.id}" placeholder="ID" readonly>
                    <input type="text" id="name" value="${product.name}" placeholder="Name">
                    <input type="text" id="price" value="${product.price}" placeholder="Price">
                    <input type="text" id="quantity" value="${product.quantity}" placeholder="Quantity">
                    <select id="categoryID">`;
                    for (let i = 0; i < category.length; i++) {
                        if (product.category.id === category[i].id) {
                            html += `<option value="${category[i].id}" selected>${category[i].name}</option>`
                        } else {
                            html += `<option value="${category[i].id}">${category[i].name}</option>`
                        }
                    }
                    html += `</select><br>
                    <button onclick="edit()">Lưu</button>
                    </div>`
                    document.getElementById("main").innerHTML = html;
                })
        })
}
function edit() {
    let id = +document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = +document.getElementById("price").value;
    let quantity = +document.getElementById("quantity").value;
    let categoryID = +document.getElementById("categoryID").value;

    let newProduct = {
        name : name,
        price : price,
        quantity : quantity,
        category : {
            id : categoryID
        }
    }
    axios.put(`http://localhost:8080/products/${id}`, newProduct).then(function (response) {
        showHome();
    })
}