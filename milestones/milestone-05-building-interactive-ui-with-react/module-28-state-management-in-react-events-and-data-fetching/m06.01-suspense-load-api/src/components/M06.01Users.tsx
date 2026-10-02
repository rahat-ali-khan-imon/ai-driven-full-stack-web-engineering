/**
 * 1. Data source || JSON
 * 2. JSON.stringify() 
 * 3. JSON.parse()
 * 
 * 4.  .json()
*/


// callback
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((data) => {
//     console.log(data)
// })


// async await
// async function loadData1() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = response.json();
//     return data;
// }


// async await array function
// const loadData2 = async () {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = response.json();
//     return data;
// }



function Users() {
    return (
        <>
            <h2>Users: </h2>
        </>
    )
}

export default Users;