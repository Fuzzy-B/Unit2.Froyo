# Unit2.Froyo

A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

1. prompt in browser (enter list of comma-seperated froyo flavors)
2. ?fill prompt with? -vanilla,vanilla,vanilla,strawberry,coffee,coffee
-object with flavors entered and amount of each
    -assign array with prompt entries
    -empty object 'order'
    -if (item[i] === )
    -loop here?
    -make a function that enters user input into object (flavor, amount)
        -parse into array then into object?
3. console.table froyo order (flavors, +how many they ordered)


TWO SOLUTIONS:
1. start with object with flavor values: 0
2. start with empty object, add values as each flavor is iterated through(if value = undefined{ make value = 1})