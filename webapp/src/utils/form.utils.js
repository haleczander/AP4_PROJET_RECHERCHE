export function populateDatalist( datalistId, items, displayFn ) {
    const datalist = document.getElementById(datalistId);
    if (!datalist) return;
    datalist.innerHTML = ""; 
    items.forEach((item) => {
        const option = document.createElement("option");
        option.value = displayFn(item); 
        datalist.appendChild(option);
    });
}
