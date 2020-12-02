// let product = ["Iphone X", "Samsung Galaxy Note", "Sony"];
// let origin = ["USA","CHINA","ENGLAND"];
// let describe=["Hàng nguyên tem có bảo hành","Hàng xịn lắm","Hàng này đỉnh"];
// let price=["400044","34534534","2523524"];
// let number=["3","4","6"]
// showAllProduct();
//
// function showAllProduct() {
//     let content = "";
//     for (let i = 0; i < product.length; i++) {
//         content += '        <tr>\n' +
//             '            <td>' + (i + 1) + '</td>\n' +
//             '            <td>' + product[i] + '</td>\n' +
//             '            <td>' + origin[i] + '</td>\n' +
//             '            <td>' + describe[i] + '</td>\n' +
//             '            <td>' + price[i] + '</td>\n' +
//             '            <td>' + number[i] + '</td>\n' +
//             '            <td><button onclick="editProduct(' + i + ')">Edit</button></td>\n' +
//             '            <td><button onclick="deleteProduct(' + i + ')">Delete</button></td>\n' +
//             '        </tr>'
//     }
//     document.getElementById("list").innerHTML = content;
// }
//
// function addNewProduct() {
//     //buoc 1: Lay ten từ ô input
//     let newP = document.getElementById("btnSave").value;
//     //bước 2: add tên vào mảng
//     product.push(newP);
//     //bước 3: hiển thị lại danh sách
//     showAllProduct();
//     //bước 4: làm trắng lại nút tạo mới;
//     // document.getElementById("newProduct").value = "";
// }
//
// function editProduct(index) {
//     //Bước 1: Đưa ra ô để nhập dữ liệu
//     let newName = prompt("Mời bạn nhập sản phẩm mới", product[index]);
//     //Bước 2: Gán giá trị mới cho index
//     product[index] = newName;
//     //Bước 3: Hiển thị lại mảng
//     showAllProduct();
// }
//
// function deleteProduct(index) {
//     if (confirm('Bạn có chắc chắn muốn xóa sản phẩm ?')) {
//         product.splice(index, 1);
//     }
//     showAllProduct();
//
// }


class Product {
    constructor(id,name, origin, describe, price, number) {
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.describe = describe;
        this.price = price;
        this.number = number;
    }
}

let productList = [];

function displayProducts() {
    let content="";
    for (let i = 0; i < productList.length; i++) {
        content += `<tr>
                    <td>${productList[i].id}</td>
                    <td>${productList[i].name}</td>
                    <td>${productList[i].origin}</td>
                    <td>${productList[i].describe}</td>
                    <td>${productList[i].price}</td>
                    <td>${productList[i].number}</td></tr>`
    }
    document.getElementById('display-product').innerHTML = content;
}

function addNewProduct() {
    let newProduct = new Product(
        productList.length+1,
        document.getElementById('name-product').value,
        document.getElementById('origin-product').value,
        document.getElementById('describe-product').value,
        document.getElementById('price-product').value,
        document.getElementById('number-product').value
    );
    productList.push(newProduct);

    displayProducts();
}
