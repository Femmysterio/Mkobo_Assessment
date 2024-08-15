/// <reference types="cypress" />

import loginPage from '../../support/POM/loginPage'

const email = "payrollprocessors@yopmail.com"
const password = "Mkobo@123"
const wrongEmail = "random123@gmcom"
const noDomainEmail = "payrollprocessors@.com"
const invalidTldEmail = "payrollprocessors@yopmail.xyz"
const wrongPassword = "345dhf"
const noSpecialXPassword = "Mkobo123"
const noNumberPassword = "Mkobo@"
const noUpperCasePassword = "mkobo@123"
const noLowerCasePassword = "MKOBO@123"
const sameCharacterPassword = "4444444444444444"
const specialCharacterPassword = "!@#$$%$?#@$%(&^^%*"

describe('Validate Login Functionality', () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it("Verify Login with Valid Credentials", () => {

        loginPage.email(email);
        loginPage.password(password);
        loginPage.loginBtn()

        //Home Page Assertion
        loginPage.assertHomePage()
    });


    it("Verify User cannot Login with Empty Email field", () => {
        loginPage.email(' ');
        loginPage.password(password);
        loginPage.loginBtn()

        loginPage.assertEmptyCredential()
    });


    // it("Verify User cannot Login with Empty Password field", () => {
    //     loginPage.email(email);
    //     loginPage.password(' ');
    //     loginPage.loginBtn();

    //     loginPage.assertEmptyCredential();
    // });

    it("Verify User cannot Login with Empty Email and valid Password ", () => {
        loginPage.email(' ');
        loginPage.password(' ');
        loginPage.loginBtn()

        loginPage.assertEmptyCredential()
    });


    it("Verify User cannot Login with Invalid email ", () => {
        loginPage.email(wrongEmail);
        loginPage.password(password);
        loginPage.loginBtn();

        loginPage.assertLoginError()
    });


    it("Verify User cannot Login with Invalid password ", () => {
        loginPage.email(email);
        loginPage.password(wrongPassword);
        loginPage.loginBtn();

        loginPage.assertIncorrectPassword()
    });


    it("Verify User cannot Login with Invalid email and password credentials", () => {
        loginPage.email(wrongEmail);
        loginPage.password(wrongPassword);
        loginPage.loginBtn();

        loginPage.assertLoginError()
    });

    it("Verify User cannot Login with no Domain in email", () => {
        loginPage.email(noDomainEmail);
        loginPage.password(password);
        loginPage.loginBtn();

        loginPage.assertLoginError()
    });

    it("Verify User cannot Login with Invalid TLD in email", () => {
        loginPage.email(invalidTldEmail);
        loginPage.password(password);
        loginPage.loginBtn();

        loginPage.assertLoginError()
    });

    it("Verify User cannot Login with no special character in Password", () => {
        loginPage.email(email);
        loginPage.password(noSpecialXPassword);
        loginPage.loginBtn();

        loginPage.assertIncorrectPassword()
    });


    it("Verify User cannot Login without Number in Password", () => {
        loginPage.email(email);
        loginPage.password(noNumberPassword);
        loginPage.loginBtn();

        loginPage.assertIncorrectPassword()
    });

    it("Verify User cannot Login without Uppercase Letters in Password", () => {
        loginPage.email(email);
        loginPage.password(noUpperCasePassword);
        loginPage.loginBtn();

        loginPage.assertIncorrectPassword()
    });


    it("Verify User cannot Login without Lowercase Letters in Password", () => {
        loginPage.email(email);
        loginPage.password(noLowerCasePassword);
        loginPage.loginBtn();

        loginPage.assertIncorrectPassword()
    });


    it("Verify User cannot Login when characters are the same in Password", () => {
        loginPage.email(email);
        loginPage.password(sameCharacterPassword);
        loginPage.loginBtn();

        loginPage.assertIncorrectPassword()
    });


    it("Verify User cannot Login with Only special characters in Password", () => {
        loginPage.email(email);
        loginPage.password(specialCharacterPassword);
        loginPage.loginBtn();

        loginPage.assertIncorrectPassword()
    });
})