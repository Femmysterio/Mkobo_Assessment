/// <reference types="cypress" />

import loginPage from '../../support/pom/loginPage'
import payrollPage from '../../support/pom/payrollPage';

const email = "payrollprocessors@yopmail.com"
const password = "Mkobo@123"

describe('Validate Mkobo Payroll functionality', () => {

    beforeEach(() => {
        cy.visit("http://46.101.32.157:5000/auth/login")

        loginPage.email(email);
        loginPage.password(password);
        loginPage.loginBtn()

        //Home Page Assertion
        loginPage.assertHomePage()
    });

    it("Verify Create Payrun", () => {

        payrollPage.payroll.payrollBtn();
        payrollPage.payroll.assertPayrollPage();
        payrollPage.payroll.createNewPayroll();
        payrollPage.payroll.setPayoutDate();
        payrollPage.payroll.checkboxName();
        payrollPage.payroll.createPayrun();
        payrollPage.payroll.assertSuccessMsg();
    });


    it("Verify Payroll Settings Update", () => {
        payrollPage.payrollSettings.payrollBtn();
        payrollPage.payrollSettings.payrollSettingsBtn();
        payrollPage.payrollSettings.selectMonthly();
        
        payrollPage.payrollSettings.addItemToPayroll();
        payrollPage.payrollSettings.inputName();
        payrollPage.payrollSettings.inputPercent();
        payrollPage.payrollSettings.addAllowanceBtn();
        

        payrollPage.payrollSettings.assertBreakdownUpdatedMsg();
        payrollPage.payrollSettings.addItemToRemittance();
        payrollPage.payrollSettings.inputName();
        payrollPage.payrollSettings.inputPercent();
        payrollPage.payrollSettings.addDeductionBtn();
        
        payrollPage.payrollSettings.scrollToToggle();
        cy.wait(2000)
        payrollPage.payrollSettings.toogleSwitch();
        cy.wait(2000)
        payrollPage.payrollSettings.toogleSwitch();

        payrollPage.payrollSettings.addItemToPayrollApproval();
        payrollPage.payrollSettings.selectLevel1();
        payrollPage.payrollSettings.selectAdmin1();
        payrollPage.payrollSettings.addAdmin();

        payrollPage.payrollSettings.addItemToPayrollApproval();
        payrollPage.payrollSettings.selectLevel2();
        payrollPage.payrollSettings.selectAdmin2();
        payrollPage.payrollSettings.addAdmin();
        
        payrollPage.payrollSettings.updatePayrollSettingsBtn();
    });
})