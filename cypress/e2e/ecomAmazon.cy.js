import cartPage from "../pageObjects/cartPage"
import homePage from "../pageObjects/homePage"
import loginPage from "../pageObjects/loginPage"
import shoppingDashboardPage from "../pageObjects/shoppingDashboardPage"

let home = new homePage()
let login = new loginPage()
let shoppingDashboard = new shoppingDashboardPage()
let cart = new cartPage()

describe('Amazon Login Test', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('URL'))
  })
  it('Logs into Amazon', () => {

    // Click on sign in button
    home.signInButton().click()

    // Enter email
    login.userEmail().type(Cypress.env('USER_EMAIL'))
    login.continueButton().click()

    // Enter password
    login.password().type(Cypress.env('PASSWORD'))
    login.submitButton().click()

    cy.get('body').then($body => {
      if ($body.find('.a-size-large').length > 0) {
        // CAPTCHA found
        cy.log('CAPTCHA encountered. Manual intervention required.')
      } else {
        shoppingDashboard.accountListLink().realHover('mouse')
        cy.contains('Sign Out').should('be.visible')
      }
    })

  })

  it('Searches for the product', () => {
    const SEARCH_TERMS = ['laptop', 'smartphone', 'headphones']

    SEARCH_TERMS.forEach(term => {
      shoppingDashboard.serachBox().should('be.visible').clear().type(term)
      shoppingDashboard.submitSearchButton().click()
      cy.url().should('include', `k=${term}`)
    })
    
  })

  it('Searches and adds a product to the cart', () => {
    shoppingDashboard.serachBox().type('laptop')
    shoppingDashboard.submitSearchButton().click()
    shoppingDashboard.firstProduct().click()

    // Add the product to the cart
    shoppingDashboard.addToCartButton().click()

    // Verify product is added to the cart
    shoppingDashboard.cartCount().should('not.have.text', '0')
  })

  it('Adds product to cart and goes to checkout', () => {
    shoppingDashboard.serachBox().type('laptop')
    shoppingDashboard.submitSearchButton().click()
    shoppingDashboard.firstProduct().click()

    // Add the product to the cart
    shoppingDashboard.addToCartButton().click()

    // Go to cart
    shoppingDashboard.navigateToCart().click()

    // Proceed to checkout
    cart.proceedCheckout().click()

    // Verify we are on the sign-in page
    cy.url().should('include', 'signin')
  })
})
