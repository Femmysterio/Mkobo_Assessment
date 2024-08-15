/// <reference types="cypress" />class homePage {

class loginPage {

    email(value) {
        cy.get('[placeholder="Email Address"]').type(value)
    }

    password(value) {
        cy.get('[type="password"]').type(value)
    }

    loginBtn() {
        cy.contains("Login").click({force:true})
    }  

    assertHomePage() {
        cy.get('div > h3').first().should('contain.text', "Welcome to your Dashboard ")
    }

    assertEmptyCredential() {
        cy.contains('Please enter a valid email address and password')
    }
    
    assertIncorrectPassword() {
        cy.contains('Incorrect password')
    }
    assertLoginError() {
        cy.contains('An error occurred while logging in. Please try again.')
    }
}

module.exports = new loginPage