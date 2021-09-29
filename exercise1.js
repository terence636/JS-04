// PART 1
const customer = ['Sofia','David','Juan'];
console.log(customer)

// PART 2
customer.push('Sara')
customer.push('Augustin')
const teller = customer[0];
console.log(customer)
console.log("Teller is", teller)

// PART 3
customer.splice(2,0,'Renata')
customer.push('Elena')
console.log(customer)