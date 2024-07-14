class shoppingDashboardPage {

    accountListLink() {
        return cy.get('#nav-link-accountList')
    }

    serachBox() {
        return cy.get('#twotabsearchtextbox')
    }

    submitSearchButton() {
        return cy.get('#nav-search-submit-button', { timeout: 10000 })
    }

    firstProduct() {
        return cy.get('.s-main-slot .s-result-item h2 a').first()
    }

    addToCartButton() {
        return cy.get('#add-to-cart-button')
    }

    cartCount() {
        return cy.get('#nav-cart-count')
    }

    navigateToCart() {
        return cy.get('#nav-cart')
    }

}

export default shoppingDashboardPage;