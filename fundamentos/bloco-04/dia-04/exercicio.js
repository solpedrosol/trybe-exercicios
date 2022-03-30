let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//1
console.log('Bem-vinda, ' + info['personagem']);

//2
info['recorrente'] = 'Sim';
console.log(info['recorrente']);

//3
for (let informacoes in info) {
  console.log(informacoes);
}

//4
for (let informacoes in info) {
  console.log(info[informacoes]);
}

//5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}

//novo objeto
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
      {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
      },
      {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
      },
  ],
};
//6
console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' é ' + leitor['livrosFavoritos'][0]['titulo']);

//7
console.log(leitor['nome'] + ' tem 2 livros favoritos: ' + leitor['livrosFavoritos'][0]['titulo'] + ' e ' + leitor['livrosFavoritos'][1]['titulo']);