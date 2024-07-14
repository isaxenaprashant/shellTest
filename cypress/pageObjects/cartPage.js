class cartPage {

    proceedCheckout() {
        return cy.get('.a-button-input').contains('Proceed to checkout')
    }

}

export default cartPage;