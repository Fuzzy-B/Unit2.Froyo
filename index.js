const userInputOrder = prompt(
    "Please enter order below - separated by commas!",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

const stringArrayInput = userInputOrder.split(",");

const order = {}

function updateOrder(array) {
    for (const item of array) {
        let CurrentFlavor = item.toLowerCase().trim()
        //made new var = order item, trimmed and lowercase
        if (order[CurrentFlavor] === undefined) {
            order[CurrentFlavor] = 1
        } else {
            order[CurrentFlavor] += 1
        }
    }
    return order
}

console.table(updateOrder(stringArrayInput))

//ANOTHER POSSIBLE SOLUTION: 

// const userInputOrder = prompt(
//     "Please enter order below - separated by commas!",
//     "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
//   );

//   const stringArrayInput = userInputOrder.split(",");

// const order = {
//     vanilla: 0,
//     coffee: 0,
//     strawberry: 0
// } 
// function updateOrder(array) {
//     for (const item of array) {
//         if(item === 'vanilla') {
//             order.vanilla += 1
//         }
//         if(item === 'coffee') {
//             order.coffee += 1
//         }
//         if(item === 'strawberry') {
//             order.strawberry += 1
//         }
//     }
//     return order
// }
 
// console.table(updateOrder(stringArrayInput))