//ham check validate
function checkForm() {
    resetWarning()
    let isValid = true;
    if (product.name == "") {
        document.getElementById("name-invalid").innerHTML = "Name is required!"
        isValid = false;
    }
    if (product.image == "") {
        document.getElementById("image-invalid").innerHTML = "Image is required!"
        isValid = false;
    }
    if (product.quantity < 1) {
        document.getElementById("quantity-invalid").innerHTML = "Quantity is required!"
        isValid = false;
    }
    if (product.price < 1) {
        document.getElementById("price-invalid").innerHTML = "Price is required!"
        isValid = false;
    }
    if (product.origin == "Origin") {
        document.getElementById("origin-invalid").innerHTML = "Origin is required!"
        isValid = false;
    }
    if (product.description == "") {
        document.getElementById("describe-invalid").innerHTML = "Description is required!"
        isValid = false;
    }
    return isValid;
}
//ham xoa cac canh bao validate
function resetWarning() {
    document.getElementById("name-invalid").innerHTML = ""
    document.getElementById("image-invalid").innerHTML = ""
    document.getElementById("quantity-invalid").innerHTML = ""
    document.getElementById("price-invalid").innerHTML = ""
    document.getElementById("origin-invalid").innerHTML = ""
    document.getElementById("describe-invalid").innerHTML = ""
}