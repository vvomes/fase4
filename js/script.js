async function login()	{
	const email = document.getElementById("email");
	const pwd = document.getElementById("pwd");
	//const response = await fetch('asd', {
	//	method: 'POST', 
	//	mode: 'cors', 
	//	headers: {
	//		'Content-Type': 'application/json'
	//		// 'Content-Type': 'application/x-www-form-urlencoded',
	//	},
	//	body: JSON.stringify({email, pwd})
	//})
	//Caro professor, como não temos um backend, estarei fazendo um get nessa api de pokemon pra mostrar no console :D. Normalmente, sei que tenho que mandar os dados com post. 💕
	fetch('https://pokeapi.co/api/v2/pokemon/')
		.then((response) => response.json())
		.then((data) => {
		data.results.forEach(pokemon => {
		console.log(pokemon)
	});
	});
}

window.onload = () => {
	document.getElementById("enviar").addEventListener("click", () => login())
}
