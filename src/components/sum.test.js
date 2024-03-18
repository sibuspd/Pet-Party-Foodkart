import { sum } from "./sum";

test ("sum function should return addition of 2 numbers",()=>{
     
    //Calling the function
    const result = sum(3,4);

     // Assertion
     expect(result).toBe(7); 
});