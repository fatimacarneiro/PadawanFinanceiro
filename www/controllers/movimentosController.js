(function () {
  'use strict';

  angular.module('starter').controller('tabelaController', function ($scope, $state, consultaMovimentosService, $ionicPopup) {
    var vm = this;
    vm.$scope = $scope;

    vm.movimento = {}
    vm.saldoAtual = null;
    vm.saldoReceita = null;
    vm.saldoDespesa = null;

    vm.filtraDescricao = function (event) {
      vm.tabelaExibida = vm.listaMovimento.filter((itemTabela) => itemTabela.description.match(event, 'i'));
    }

    let atualizarMovimentos = res => {
      vm.listaMovimento = res.data

      vm.tabelaExibida = vm.listaMovimento;

      for (let i = 0; i < vm.tabelaExibida.length; i++) {
        if (vm.tabelaExibida[i].type === "EXPENSE") {
          vm.tabelaExibida[i].type = "Despesa"
        } else if (vm.tabelaExibida[i].type === "REVENUE") {
          vm.tabelaExibida[i].type = "Receita"
        }
      }
    }

    function init() {
      consultaMovimentosService.listarMovimentos().then(atualizarMovimentos);
    }

    init();

    vm.mudaTelaCadastro = function () {
      $state.go('app.cadastroMovimentos');
    }

    vm.excluir = function (movimentoSelecionado) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Excluir Movimento',
        template: 'Tem certeza que deseja excluir esse movimento?'
      });

      confirmPopup.then(function (res) {
        if (res) {
          consultaMovimentosService.apagar(movimentoSelecionado.id)
            .then(res => {
              consultaMovimentosService.listarMovimentos().then(atualizarMovimentos)
            })
        }
      });
    }

    vm.filtra = function () {
      debugger;
      vm.tabelaExibida = vm.listaMovimento
        .filter(filtraValor)
        .filter(filtraData)
        .filter(filtraTipo);
    }

    vm.filtroAvancado = () => {
      $ionicPopup.show({
        templateUrl: 'templates/filtroAvancado.html',
        title: 'Filtro Avançado',
        subTitle: 'Selecione os dados para filtrar',
        scope: vm.$scope,
        buttons: [
          {
            text: '<b>Fechar</b>',
            type: 'button-positive'
          }
        ]
      })
    }

    let filtraData = item => !vm.movimento.date || item.date.match(vm.movimento.date, 'i')

    let filtraValor = item => !vm.movimento.value || item.value === vm.movimento.value

    let filtraTipo = item => !vm.movimento.type || item.type === vm.movimento.type
  })
})();

