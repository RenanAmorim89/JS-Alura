let livro = {
  titulo: "Cangaceiro JavaScript",
  autor: "Flávio Almeida",
  genero: "Front-end",
  editora: "Casa do código",
  preco: 31.92,
};
livro.preco;
var livros = [
  {
    titulo: "Cangaceiro JavaScript",
    autor: "Flávio Almeida",
    genero: "Front-end",
    editora: "Casa do código",
    preco: 31.92,
  },

  {
    titulo: "Introdução e boas práticas em UX Design",
    autor: "Fabricio Teixeira",
    genero: "UX & UI",
    editora: "Casa do código",
    preco: 31.92,
  },

  {
    titulo: "Scrum",
    autor: "Rafael Sabbagh",
    genero: "Métodos Ágeis",
    editora: "Casa do código",
    preco: 31.92,
  },
];

console.log(livros[0]["autor"]);
console.log(livros[0].autor);
