function showHome() {
    axios.get('http://localhost:8080/products').then(function (response) {
        let products = response.data;
        let html = `
        <table border="1">
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Category</td>
        <td colspan="2">Action</td>
    </tr>
        `;
        for (let i = 0; i < products.length; i++) {
            html += `
            <tr>
                <td>${products[i].id}</td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].quantity}</td>
                <td>${products[i].category.name}</td>
                <td><button onclick="showFormEdit(${products[i].id})">Sửa</button></td>
                <td><button onclick="remove(${products[i].id})">Xóa</button></td>
            </tr>
            `
        }
        html += '</table>';
        document.getElementById("main").innerHTML = html;
    })
}

showHome();

function remove(id) {
    let isConfirm = confirm("Muốn xóa không?")
    if(isConfirm) {
        axios.delete(`http://localhost:8080/products/${id}`).then((response) => {
            alert("Xóa thành công");
            showHome();
        })
    }
}