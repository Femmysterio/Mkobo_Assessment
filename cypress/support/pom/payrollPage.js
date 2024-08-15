/// <reference types="cypress" />class homePage {

class payrollPage {

    payroll = {
        payrollBtn: () => cy.get('.mr-4').click(),
        assertPayrollPage: () => cy.get('div > header').should('include.text', 'Payroll'),
        createNewPayroll: () => cy.contains('+ Create New Payroll').click({force:true}),
        setPayoutDate: () => cy.get('[placeholder="Set payout date"]').type("2024-08-04"),
        checkboxName: () => cy.get('[type="checkbox"]').eq(0).click(),
        createPayrun: () => cy.contains('Create Payrun').click({force:true}),

        assertSuccessMsg: () => cy.on('window:alert', (str) => {
            expect(str).to.include('Payrun successfully created');
        })
    }

    payrollSettings = {
        payrollBtn: () => cy.get('.mr-4').click(),
        payrollSettingsBtn: () => cy.contains(' Payroll Settings').click(),
        selectMonthly: () => cy.get('[value="monthly"]'),

        addItemToPayroll: () => cy.get('.bg-mkoboBgButton').eq(0).click(),
        inputName: () => cy.get('[name="name"]').type('ORUNGBEJA FEMI'),
        inputPercent: () => cy.get('[name="value"]').type(15),
        addAllowanceBtn: () => cy.contains('Add Allowance').click({force:true}),

        // breakdownUpdatedMsg: () => cy.on('window:alert', (str) => {
            
        //     expect(str).to.include('Breakdown updated successfully.');
        // }),

        assertBreakdownUpdatedMsg: () => cy.contains('Breakdown updated successfully.').should('include.text', 'Breakdown updated'),

        addItemToRemittance: () => cy.get('.bg-mkoboBgButton').eq(1).click({force:true}),
        addDeductionBtn: () => cy.contains('Add Deduction').click(),
        scrollToToggle: () => cy.get('[role="switch"]').first().scrollIntoView(),
        toogleSwitch: () => cy.get('[role="switch"]').first().click({force:true}),

        addItemToPayrollApproval: () => cy.get('.bg-mkoboBgButton').eq(2).click({force:true}),
        selectLevel1: () => cy.get('[name="level"]').select('level_3', {force:true}),
        selectAdmin1: () => cy.get('[name="admin"]').select('8e70e0fd-8e86-4668-add7-1e48361bad18', {force:true}),
        addAdmin: () => cy.contains('Add Admin').click(),
        selectLevel2: () => cy.get('[name="level"]').select('level_4', {force:true}),
        selectAdmin2: () => cy.get('[name="admin"]').select('Latest Again', {force:true}),
        
        updatePayrollSettingsBtn: () => cy.contains('Update').click()
    }

}

module.exports = new payrollPage