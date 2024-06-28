/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page';
import EnderecoPage from '../support/page-objects/endereco.page';
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        }) 
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
       EnderecoPage.editarEnderecoFaturamento('Adriana','Campos','EBAC','Brasil','Av Brasil','320','Belo Horizonte','Minas Gerais','01000100','31999998888','adriana@teste.com')
       cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
     });
    
     it('Deve fazer cadastro de endereço de envio com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega('Adriana', 'Campos', 'Google', 'Brasil', 'Rua Maria Flor', '55', 'Belo Horizonte', 'Minas Gerais', '01000100')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
     });

     it('Deve fazer cadastro de endereço de envio com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].rua,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
     });
});