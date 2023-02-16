describe('OrangeHRM', function(){
    it('ForgotPassword', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").click()
        cy.title().should('eq','OrangeHRM')
        cy.xpath("//button[@type='submit']")
        cy.get('button[type="button"]').should('be.visible')
      
    })

    it ('InvalidCredentials', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('div.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--gray-lighten-2.orangehrm-demo-credentials p.oxd-text.oxd-text--p').then(function($name){
                         let Username = $name.text().split(" ")
                        cy.get('input[name="username"]').type(Username[0])
                        cy.get('input[type="password"]').type('indu')
                        cy.xpath("//button[@type='submit']").click()
            cy.xpath("//p[text()='Invalid credentials']").contains('Invalid credentials')
    })


 })


it('ValidCredentials',function(){

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/div/div/p[1]").then(function name($name) {
        let Username = $name.text().split(': ')
        cy.xpath("//input[@placeholder='Username']").type(Username[1])
        cy.get('div.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--gray-lighten-2.orangehrm-demo-credentials :nth-child(2)').then(function($code){
                        let password = $code.text().split(': ')
                        cy.get('input[type="password"]').type(password[1])
    })
        cy.get("button[type='submit']").click()
        cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get('div.oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget').should('be.visible')
})
})

it('logout',()=>{

        cy.xpath("//p[@class='oxd-userdropdown-name']").click()
        cy.xpath("//a[text()='Logout']").click()
        cy.url().should('equal','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


    })


    
    })



