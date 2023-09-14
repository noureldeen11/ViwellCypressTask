import { RFQ } from "../../Pages/RFQ_Page"
import { LoginPage } from "../../Pages/login_Page"

const loginPage = new LoginPage()
const rfq = new RFQ()


describe('Test RFQ Form', () => {
    
    beforeEach(function(){
        cy.fixture('Environment.json').then((env) => {
            const { Home, Mail, Password} = env;
        cy.visit(Home)
        loginPage.Login_to_Website(Mail, Password)
        cy.wait(2000)
        cy.fixture('URLs.json').then((ruls) => {
            const {Home, RFQ_Page} = ruls;
        const targetPage = Home + RFQ_Page
        cy.visit(targetPage)});
        })
    
 })

    it('Create New RFQ', () => {
        // cy.fixture('URLs.json').then((ruls) => {
        //     const {Home, RFQ_Page} = ruls;
        //     const targetPage = Home + RFQ_Page
        //   cy.visit(targetPage)
        //   });
        var productName = 'Samsung Galaxy A33 5G Mobile Phone Dual SIM Android Smartphone 128GB, 6GB RAM, Black'
        var quantity = '10'
        var unitPrice = '1000'
        var expireDay = '25'
        var expireMonth = 'September'
        var expireYear = '2023'
        var destination = 'Andorra'
        var city = 'Andorra la Vella'

        rfq.Enter_Product_Name(productName)
        rfq.EnterQuantity(quantity)
        rfq.Enter_Unit_Price(unitPrice)
        rfq.pick_Expire_Date(expireDay,expireMonth, expireYear)
        rfq.choose_Ship_Destination(destination)
        rfq.choose_Shiping_City(city)
        //cy.wait(5000)
        rfq.submit_RFQ()
        cy.wait(8000)
        rfq.validate_RFQ_Submitted()
        rfq.validate_RFQ_URL_Submittion()
    })

})