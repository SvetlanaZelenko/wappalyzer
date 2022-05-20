describe("Sign up successful", () => {
    it("Sign up", () => {
        cy.visit('/')
        //cy.get('[class=\'mr-4 v-btn v-btn--outlined theme--light v-size--default white--text\']').click()
        cy.contains('Sign up free').click()

        //cy.get('[@class="v-text-field__slot'][label(contains("Email address")]').type('zelenko@gmail.com')
        //cy.get('[v-text-field__slot]').should('contain', 'Email address')
        //cy.wait(10000)
        //cy.get('[class="v-label theme--light error--text"]')

        // this works but ID is dynamic and changes every time page is refreshed
        cy.get('[required="required"][id="input-278"]').type('test@gmail.com')
        cy.get('[required="required"][id="input-279"]').type('test123456')

        //try iframe plugin usage - https://npm.io/package/cypress-iframe
        //cy.frameLoaded('#reCAPTCHA') // does not work
        cy.frameLoaded({url:'https://www.recaptcha.net/recaptcha/api2/anchor?ar=1&k=6LeW3NobAAAAACuVCOX8MLhIHtJCitFkuUZjRPRo&co=aHR0cHM6Ly93d3cud2FwcGFseXplci5jb206NDQz&hl=en&v=QENb_qRrX0-mQMyENQjD6Fuj&theme=light&size=normal&badge=bottomright&cb=f3xefydhoex9'})

























        //cy.iframe('reCAPTCHA').find('recaptcha-checkbox-border').should('be.visible').click()


    })
})