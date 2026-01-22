// Includes - Verifica se um valor existe em um array - case sensitive (diferencia maiusculas de minusculas )

let frutas = ["Banana", "Maçã", "Laranja", "Manga"];

let possuiManga = frutas.includes("Manga"); // Verifica se "Manga" está presente no array 'frutas'

console.log(`Possui Manga? ${possuiManga}`); // Exibe true se "Manga" estiver no array, caso contrário false

let possuiUva = frutas.includes("Uva"); // Verifica se "Uva" está presente no array 'frutas'

console.log(`Possui Uva? ${possuiUva}`); // Exibe true se "Uva" estiver no array, caso contrário false

let possuiOvo = frutas.includes("Ovo");

console.log(`Possui Ovo? ${possuiOvo}`);

console.log(frutas.includes("Ovo"));

// StartsWith - Verifica se uma string começa com os caracteres especificados - Case sensitive

let mensagem = "Olá, seja bem-vindo ao curso de JavaScript!";       

console.log(mensagem.startsWith("Olá, seja")); // Verifica se a string começa com "Olá, seja" - Retorna true

console.log(mensagem.startsWith("curso")); // Verifica se a string começa com "curso" - Retorna false   


// EndsWith - Verifica se uma string termina com os caracteres especificados - Case sensitive

console.log(mensagem.endsWith("JavaScript!")); // Verifica se a string termina com "JavaScript!" - Retorna true
console.log(mensagem.endsWith("bem-vindo")); // Verifica se a string termina com "bem-vindo" - Retorna false