function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for string fazia, nao faz nada
    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi digitado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa); // Imprime no console o elemento HTML encontrado para verificação
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tag = "";
  
    // Itera sobre cada item de dados da pesquisa
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tag = dado.tag.toLowerCase();

        if (titulo.includes(campoPesquisa) || 
            descricao.includes(campoPesquisa) || 
            tag.includes(campoPesquisa)){
        // console.log(dado.titulo.includes(campoPesquisa))
        // Constrói o HTML para cada resultado, formatando os dados do objeto
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Para mais informações</a>
        </div>
      `;
        }
    }
  
    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"  
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }

//console.log(dados);

