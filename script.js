function togglePopupAdd(){
    document.getElementById("popup-1").classList.toggle("active");
}
function togglePopupEdit(){
    document.getElementById("popup-2").classList.toggle("active");
}
function togglePopupDel(){
    document.getElementById("popup-3").classList.toggle("active");
}
function clearfield(){
    document.getElementById('customer_name').value = '';
    document.getElementById('customer_no').value = '';
    document.getElementById('due_date').value = '';
    document.getElementById('invoice_no').value = '';
    document.getElementById('notes').value = '';
    document.getElementById('amt').value = '';
}