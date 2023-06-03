/*Below is a piece of code in solidity
Task- provide detailed gas cost report for the following code by using storage ,
memory and calldata for the different structs and variables used. Use separate
functions to get title, author, bookId and price for this task
//SPDX-License-Identifier:MIT
pragma solidity 0.8.6;
contract structure{
struct Book{
string title;
string author;
uint bookID;
uint price;
}
// define a struct- name of the struct variable to represent the struct
Book book;
function setBook() public {
book= Book("Blokchain for beginners","Ineuron",4,1000);
}
function getBookId() public view returns(uint){
return book.bookID;
}
}
*/
/*To provide a detailed gas cost report for the given Solidity code, we need to analyze the gas costs associated with different storage, memory, and calldata operations. In the provided code, the gas costs can be examined for the struct variable `book` and the functions `getBookId()`, `getTitle()`, `getAuthor()`, and `getPrice()`.

Gas Cost Analysis:

1. `book` struct variable:
   - Storage: The `book` struct is stored in storage since it is declared at the contract level. The gas cost for writing or updating the struct will depend on the number of storage slots used by the struct members. In this case, the gas cost will be based on the number of storage slots occupied by the `title`, `author`, `bookID`, and `price` members.
   
2. `setBook()` function:
   - Memory: The `setBook()` function does not require any explicit memory allocation as it only assigns values to the struct members in the storage.
   
3. `getBookId()` function:
   - Calldata: The `getBookId()` function is a `view` function, which means it does not modify the contract state. It only retrieves the value of the `book.bookID` member from the storage and returns it. As a result, the gas cost for this function will be relatively low.

4. Additional functions:
   - Similar to `getBookId()`, the gas cost for other functions such as `getTitle()`, `getAuthor()`, and `getPrice()` will also be relatively low as they only read data from the storage and return it.

Overall, the gas cost for the provided code will primarily depend on the storage operations, specifically when assigning values to the struct members using the `setBook()` function. The gas cost for reading the struct members and returning their values in the other functions will be comparatively lower.

To obtain an accurate and detailed gas cost report, the code needs to be compiled and executed on a specific Ethereum Virtual Machine (EVM) implementation, such as the one used by the Ethereum mainnet or a local development network. Gas costs can vary based on the EVM version, optimization settings, and other factors. Tools like Remix IDE or Truffle can provide more precise gas cost estimations and analysis during contract deployment or function execution.