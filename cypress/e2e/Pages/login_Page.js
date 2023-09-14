export class LoginPage{

    myAccount_btn = 'My Account'
    login_Button = 'Log In'
    email_Field = '#emailAddress'
    continue_Button = 'CONTINUE'
    password_Field = '#password'
    credentials_Login_Button = 'LOG IN'


    Login_to_Website(email, password){
        cy.contains(this.myAccount_btn).trigger('mouseover', {force: true})
        cy.contains(this.login_Button).click()
        cy.get(this.email_Field).type(email)
        cy.contains(this.continue_Button).click()
        cy.get(this.password_Field).type(password)
        cy.contains(this.credentials_Login_Button).click()
      }


      validate_URL(){
        cy.url().should('eq', 'https://www.tradeling.com/ae-en')
    }

    Validate_User_Login(accountName){
        cy.contains(this.myAccount_btn).trigger('mouseover', {force: true})
        cy.contains(this.myAccount_btn).click({ force: true })
        cy.contains(accountName).should('be.visible')
      }

}