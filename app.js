function pesquisar() {

    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if(campoPesquisa == "") {
        section.innerHTML = "Erro! Tente novamente"
        return
    }
    campoPesquisa=campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    
  
    // Laço de repetição para iterar sobre cada dado da pesquisa
    for (let dado of dados) {
        titulo=dado.titulo.toLowerCase();
        descricao=dado.descricao.toLowerCase();
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
        }
       
      }

      if(!resultados) {
        resultados = "Erro! Tente novamente"
      }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }