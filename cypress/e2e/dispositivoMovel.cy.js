const sizes = ['iphone-6', 'ipad-2', [1024, 768]]


describe('Testando dispositivos móveis', ()=> {
    sizes.forEach((size) => {
        it(`Should display logo on ${size} screen`, () => {
            if (Cypress._.isArray(size)) {
              cy.viewport(size[0], size[1])
            } else {
              cy.viewport(size)
            }

it('Deve existir um botão menu burguer', ()=> {
            cy.visit('/')
            cy.getByData('botao-login').click()
            cy.getByData('email-input').type('neilton@alura.com')
            cy.getByData('senha-input').type('123456')
             cy.getByData('botao-enviar').click()
        
            cy.location('pathname').should('eq', '/home')

            cy.getByData('menu-burguer').click()
            cy.getByData('menu-lateral'). find('a').eq(3).click()
 
            cy.location('pathname').should('eq', '/home/investimentos')

        })    
    })
})

})
    


// para rodar este teste é necessário rodar comando 
// npx cypress open --config vieportWidth=375, viewportHeight=667
// Este método a cima aprendi no curso, mas não é ideal pois quando for rodar novos testes eles quebram se não fechar fechar e abrir de novo com comando npx cypress open, então olhando a documentação usei uma const e um it em que chamo a const, método correto.
