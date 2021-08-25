const unit_cost = document.querySelectorAll('.unit-cost');
const quantity = document.querySelectorAll('.quantity');
const total = document.querySelectorAll('.total');
const final_total = document.querySelector('.main-total');
total.value = `£${0}`


quantity.forEach((element, idx) => {
    element.addEventListener('keyup', () => {
        let main_total = 0
        let cost = parseFloat(unit_cost[idx].value)
        let amount = parseFloat(quantity[idx].value)
        
        let sum = cost * amount
    
        if(isNaN(sum)){
            total[idx].value = `£${0}`;
        } else {
            total[idx].value = `£${sum}`;
        }

        for(let i = 0; i < total.length; i++){
            amount = parseFloat(total[i].value.substring(1));
            if(!isNaN(amount)) {
                main_total += amount
            }
        }
        final_total.value = `£${main_total}`;
    });
});

// console.log(total[1].value)






// function clone_row() {
//     let row = document.querySelector('.item-row');
//     let table = document.getElementById('items-table');
//     let new_row = row.cloneNode(true)
//     table.appendChild(new_row);
    
// }







