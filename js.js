// Metodo fetch() para buscar o arquivo dados.json transformando o resultado em um objeto usando o metodo response.json

fetch('dados.json')
    .then(response => response.json())
    .then(corpo => {

        //Acessnado os dados do objeto json e adicionando ao HTML dentro de um elemento div usando a propriedade innerHTML (Front-End)

        document.getElementById('imagem').innerHTML = corpo.rock.image;
        document.getElementById('nome').innerHTML = corpo.rock.name;
        document.getElementById('disco').innerHTML = corpo.rock.album;
        document.getElementById('estilo').innerHTML = corpo.rock.style;
        document.getElementById('preco').innerHTML = corpo.rock.price;

        document.getElementById('imagem1').innerHTML = corpo.samba.image;
        document.getElementById('nome1').innerHTML = corpo.samba.name;
        document.getElementById('disco1').innerHTML = corpo.samba.album;
        document.getElementById('estilo1').innerHTML = corpo.samba.style;
        document.getElementById('preco1').innerHTML = corpo.samba.price;

        document.getElementById('imagem2').innerHTML = corpo.pop.image;
        document.getElementById('nome2').innerHTML = corpo.pop.name;
        document.getElementById('disco2').innerHTML = corpo.pop.album;
        document.getElementById('estilo2').innerHTML = corpo.pop.style;
        document.getElementById('preco2').innerHTML = corpo.pop.price;
    })