// let products = getProducts("products")
// let table = "";
// function displayProduct(){
//     products.forEach(function (product) {
//         table += "<tr>" +
//             "<td>" + product.id + "</td>" +
//             "<td>" + product.name + "</td>" +
//             "<td>" + product.image + "</td>" +
//             "<td>" + product.quantity + "</td>" +
//             "<td>" + product.price + "</td>" +
//             "<td>" + product.origin + "</td>" +
//             "<td>" + product.description + "</td>" +
//             "<td>" +
//             "<button class='btn btn-info' onclick='editProduct()'>Edit</i></button>" +
//             "<button style='margin-left: 15px;' class='btn btn-danger' onclick='deleteProduct()'>Delete</i></button>" +
//             "</td>" +
//             "</tr>"
//     })
//     document.getElementById('display-product').innerHTML = table;
// }

let products = []
products = getProducts("products")
let product;
let table = "";
let idForDelete;

for (let i = 0; i < products.length; i++) {
    table += `<tr>
                <td>${products[i].id}</td>
                <td>${products[i].name}</td>
                <td>${products[i].image}</td>
                <td>${products[i].quantity}</td>
                <td>${products[i].price}</td>
                <td>${products[i].origin}</td>
                <td>${products[i].description}</td>
                <td>
                <button class='btn btn-info' data-toggle="modal" data-target="#exampleModal" 
                onclick='openEditForm(${products[i].id})'>Edit</i></button>
                <button style='margin-left: 15px;' class='btn btn-danger' data-toggle="modal" data-target="#exampleModal1" 
                onclick='openDeleteModal(${products[i].id})'>Delete</i></button>
                </td>                
                </tr>`
}
document.getElementById('display-product').innerHTML = table;


// tra ve list sp // JSON.parse() : chuyen thanh doi tuong mang
function getProducts(key) {
    return JSON.parse(localStorage.getItem(key))
}

// luu value theo key
function setProducts(key, value) {
    localStorage.setItem(key, value)
}

// -------------------------------- sua san pham -------------------------------//
//hien thi form edit
function openEditForm(id) {
    products.forEach(function (p) {
        //neu id = id cua 1 p co trong mang
        if (p.id == id) {
            //thi gan gia tri p cho product
            product = p
        }
    })
    resetWarning()
    fillForm()
}
// hien thi ds cu len form
function fillForm() {
    document.getElementById("id-product").value = product.id
    document.getElementById("name-product").value = product.name
    document.getElementById("image-product").value = product.image
    document.getElementById("quantity-product").value = product.quantity
    document.getElementById("price-product").value = product.price
    document.getElementById("origin-product").value = product.origin
    document.getElementById("describe-product").value = product.description
}

//ham sua sp
function editProduct() {
    product = new Product(
        product.id,// giu nguyen id
        document.getElementById("name-product").value,
        document.getElementById("image-product").value,
        document.getElementById("quantity-product").value,
        document.getElementById("price-product").value,
        document.getElementById("origin-product").value,
        document.getElementById("describe-product").value
    )

    if (checkForm()) {
        //duyệt mảng, set giá trị mới cho product cần cập nhật
        for (let i = 0; i < products.length; i++) {
            //neu id cua product can cap nhat = id cua 1 product trong mang
            if (product.id == products[i].id) {
                //thi gan product moi vao products[i] hien tai
                products[i] = product
                //tiến hành lưu vào local
                setProducts("products", JSON.stringify(products))
                products = getProducts("products")
                alert("Cập nhật thành công!")
                //tra ve trang list
                location.replace("http://localhost:63342/startbootstrap-sb-admin-2-gh-pages/main/product/list-product.html")

            }
        }

    }
}


// -------------------------------- xoa san pham -------------------------------//
//hien thi modal xoa
function openDeleteModal(id) {
    document.getElementById("delete-modal").innerText = 'Bạn có muốn xóa sản phẩm không?'
    //xoa theo id
    idForDelete = id
}

//ham xoa sp
function deleteProduct() {
    let indexForDelete
    for (let i = 0; i < products.length; i++) {
        if (idForDelete == products[i].id) {
            indexForDelete = i
        }
    }
    //xóa 1 phần tử trong mảng
    products.splice(indexForDelete, 1);
    //tiến hành lưu vào local
    setProducts("products", JSON.stringify(products))
    products = getProducts("products")
    // alert("Xóa thành công!")
    //tra ve trang list
    location.replace("http://localhost:63342/startbootstrap-sb-admin-2-gh-pages/main/product/list-product.html")
}

