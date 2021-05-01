////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */

const cssLink = document.querySelector('link');
console.log(cssLink);

cssLink.href = "styles.css";
/* 1.2) Set the class of the image to "list-img" */
const image = document.querySelector('img');
console.log(image);

image.className = "list-img";
console.log(image);

/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */

// select all the inputs using querySelectorAll('input'); set as a variable named inputs.
// use a for loop to loop through the array where it adds a className of "btn"

const inputs = document.querySelectorAll("input");
console.log(inputs)


// for (i = 0; i < inputs.length; i++); {
//         console.log(inputs[i]);
//         inputs[i].className = "btn";
// };

// console.log(inputs);



////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */

const groceryUl = document.querySelector("ul");
console.log(groceryUl);




/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */

function addItem() {
        let itemName = prompt("Enter item name:");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(itemName));
        groceryUl.appendChild(li);
        console.log(groceryUl);
};



/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by removing the "display-none" class from the the total-area div
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */

function getTotal() {
        let div = document.querySelector("div.total-area.display-none").classList.toggle("display-none", false);
        console.log(div);
        let totalNumber = document.querySelectorAll("li").length;
        console.log(totalNumber);
        let itemCount = document.querySelector("#item-count");
        console.log(itemCount);
        // let p = document.createElement("p");
        // p.appendChild(document.createTextNode(totalNumber));
        itemCount.appendChild(document.createTextNode(totalNumber));
};




////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */
    

