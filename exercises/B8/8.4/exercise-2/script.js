const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  return books.reduce((acumulador, elemento, index, array) => {
    if (index === array.length-1) return `${acumulador}${elemento.author.name}.`
    return `${acumulador}${elemento.author.name}, `
  }, '')
}

assert.deepStrictEqual(reduceNames(), expectedResult);

const expectedResult2 = 43;

function averageAge() {
  // escreva seu código aqui
  return Math.round(books.map((elemento) => elemento.releaseYear - elemento.author.birthYear)
  .reduce((acumulador, elemento, index, array) => {
    if (index === array.length-1) return (acumulador + elemento) / array.length
    return (acumulador + elemento)
  }))

} 

assert.strictEqual(averageAge(), expectedResult2);

const expectedResult3 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
}

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((acumulador, elemento) => (acumulador.name.length > elemento.name.length) ? acumulador : elemento)
}

assert.deepStrictEqual(longestNamedBook(), expectedResult3);