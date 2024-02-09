
const loadUser = () =>{
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data => userDisplay(data.results))
}

const userDisplay = users =>{
    const divContainer = document.getElementById('container');
    for(const user of users){
        const userDiv = document.createElement('div');
        userDiv.classList.add('div-style');
        userDiv.innerHTML = `
        <p>Name: ${user.name.first}${user.name.last} </p>
        <h3>Age: ${user.dob.age} </h3>
        <h4>Gender: ${user.gender} </h4>
        <p>Location: ${user.location.country} ${user.location.city} <p>
        `
        divContainer.appendChild(userDiv);
    }
}

loadUser();