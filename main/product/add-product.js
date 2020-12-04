let product;
let products = getProducts("products");
let largest = 0;

function addNewProduct() {
    getLargest()
    product = new Product(
        largest + 1, // id moi = id lon nhat trong mang cu + 1
        document.getElementById('name-product').value,
        document.getElementById("image-product").value,
        document.getElementById("quantity-product").value,
        document.getElementById('price-product').value,
        document.getElementById('origin-product').value,
        document.getElementById('describe-product').value
    );

    if (checkForm()) {
        //day giatri moi vao mang
        products.push(product)
        //tiến hành lưu vào local
        setProducts("products", JSON.stringify(products))
        products = getProducts("products")
        alert("Thêm thành công!")
        //tra ve trang list
        location.replace("http://localhost:63342/startbootstrap-sb-admin-2-gh-pages/main/product/list-product.html")

    }
}
// ham de lay id lon nhat trong mang products
function getLargest() {
    products.forEach(function (p) {
        if (p.id > largest) {
            largest = p.id
        }
    })
}


// tra ve list sp // localStorage.getItem(key) : tra ve 1 string // JSON.parse() : chuyen thanh mang
function getProducts(key) {
    return (localStorage.getItem(key) == null ? [] : JSON.parse(localStorage.getItem(key)))
}

// luu value theo key
function setProducts(key, value) {
    localStorage.setItem(key, value)
}
