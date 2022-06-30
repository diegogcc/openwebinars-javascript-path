// Una función asíncrona siempre devuelve una promesa

async function functionAsync() {
    return Promise.resolve('Functiona!');
}

async function functionAsync2() {
    return 'Funciona!';
}

let functionAsync3 = async () => {return 'Funciona!'};

functionAsync.then(resp => console.log(resp))           // Funciona!

functionAsync2.then(resp => console.log(resp))          // Funciona!


/*
* await:
    la funcion congela su ejecución hasta que se resuelva la promesa
*/
async function funcionAsync4() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('hecho'), 1000)
    });

    let result = await promise;                         // la ejeción se para aquí

    alert(result);                                      // aquí sale la alerta con 'hecho'
}

funcionAsync4();
setTimeout(() => alert('qué tal?'), 1100);
alert('hola')
//!
/* Esto saca:
'hola'
'hecho'
'qué tal?'
*/
//! 


/*
* Reescribir una promesa usando async/await
*/
promise                                         // manera síncrona
    .then(res => console.log(res * 2))
    .then(res => console.log(res * 2))
    .catch(error => console.error(error))

try{                                            // equivalente
    let res = noPromise() * 2;
    res = res * 4;
} catch(error){
    console.error(error);
}



fetch('/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => img.remove(), 3000);
    })
    .catch(error => console.error(error.message))

//!     ↓↓↓  async/await

async function petition() {
    try{
        let response = await fetch('/user.json')
        let user = response.json();
        response = await fetch(`https://api.github.com/users/${user.name}`);
        let githubUser = response.json();

        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example"
        document.body.append(img)
        setTimeout(() => img.remove(), 3000);
    } catch (error) {
        console.log(error.message);
    }
}