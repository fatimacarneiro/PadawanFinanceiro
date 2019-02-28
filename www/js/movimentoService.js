angular.module('starter').service('movimentoService', function() {

    var movimentos = [
        { id: '0' ,descricao : 'Supermercado', valor : '999', data : '02/03/2005', tipo : 'Despesa' },
        { id: '1', descricao : 'Empresa', valor : '500', data : '02/03/2002', tipo : 'Receita' }
    ];

    return {
        obterDados,
        obter,
        apagar
    }
    
    function obterDados() {
        return movimentos;
    }

    function obter(id) {
        // return movimentos.filter((movimento) => movimento.id === id);
        for(let i = 0; i < movimentos.length; i++){
            if (movimentos[i].id === id){
                return movimentos[i]
            }
        }
    }

    function apagar(id){
        for(let i = 0; i < movimentos.length; i++){
            if (movimentos[i].id === id.id){
                return movimentos.splice(movimentos[i],1);
            }
        }
    }
})