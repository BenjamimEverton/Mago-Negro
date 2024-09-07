function pesquisar() {
    // Esta função é responsável por realizar uma pesquisa e exibir os resultados em uma seção HTML.
   
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
   // console.log(section); // Mensagem de log para verificar se a seção foi encontrada (pode ser removida em produção)

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if(campoPesquisa == ""){
        section.innerHTML = "SEM DADOS. Tente de novo" 
       return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    tags = "";

    // Itera sobre cada item (dado) da lista de dados.
     for  (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao =  dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        //se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) ||
        descricao.includes(campoPesquisa) || 
        tags.includes(campoPesquisa))  {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descrição-meta">${dado.descricao}.</p>
                <a href=${dado.link} target="_blank">Fonte</a>
            </div>
        `;
        }

          console.log(dado.titulo.includes(campoPesquisa))
        }
        
        if (!resultados){
             resultados = "<p>SEM DADOS</p>" 
        }

    // Atribui o HTML construído ao conteúdo da seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
}