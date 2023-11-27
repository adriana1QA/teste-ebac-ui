/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq(3)
        .contains('Caesar Warm-Up Pant')
        .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade= 3
       
        cy.get('[class="product-block grid"]')
            .contains('Caesar Warm-Up Pant').click()
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Gray').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Caesar Warm-Up Pant” foram adicionados no seu carrinho.')
    });
    
    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Frankie Sweatshirt', 'M', 'Green', 2)
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Caesar Warm-Up Pant', '36', 'Black', 2)
});

});