// when you have added helper code, uncomment the line below.
// import * as h from '../helpers'

const login = 'qxo88804@bcaoo.com';
const password = 'sdAA3@sd!@;';
const url = 'https://cypress-testing.atlassian.net/';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


describe('Jira Cloud', () => {

    function loginFn() {
        return cy.visit(url)
            .wait(500)
            .get('#username').type(login)
            .get('#login-submit').click()
            .get('#password').type(password)
            .get('#login-submit').click();
    }

    // https://jira.atlassian.com/browse/CONFCLOUD-64739?attachmentOrder=desc
    it('not working', () => {
        loginFn()
            .root()
            .get('[data-testid="atlassian-navigation--primary-actions--addons--menu-trigger"]').click()
            .get('a').contains('Tempo').click()
            .get('[data-testid="Content"]')
            .enter().then(body => {
                body().get('.sp-add-new').click();
                body().get('sp-big-picture-jira-server-wizard').should('be.visible');
            });
    });

});
