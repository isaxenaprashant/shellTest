class loginPage {

    userEmail() {
        return cy.get('#ap_email')
    }

    continueButton() {
        return cy.get('#continue')
    }

    password() {
        return cy.get('#ap_password')
    }

    submitButton() {
        return cy.get('#signInSubmit')
    }

    puzzle() {
        return cy.get('.a-size-large')
    }

}

export default loginPage;