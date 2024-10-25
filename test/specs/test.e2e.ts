import { expect } from '@wdio/globals'
import ofersPage from '../pageobjects/ofers.page'
import landingPage from '../pageobjects/landing.page'
//import { contains } from 'cypress/types/jquery'


describe('My Login application', () => {
    const hollandPage = 'https://www.hollandamerica.com/es'
    const seabournPage = 'https://www.seabourn.com'

    before (async ()=> {
        //verifying that the login page is accessible
        await landingPage.open(hollandPage)
        await expect(browser).toHaveUrl(hollandPage)
    })
    
    it('Verifying current launched Page', async () => {
        const loadingPage = await browser.getUrl();

        if (loadingPage.startsWith(hollandPage)) {
            await expect(landingPage.hollandLogo).toBeExisting()
        } else if (loadingPage.startsWith(seabournPage)) {
            // Specific check for Seabourn page
            await expect(landingPage.seabournLogo).toBeExisting()
        }
    })

    it('Verify offers page', async () => {
        await landingPage.offersNavClick()
        await landingPage.allCruiseOffersClick()

        await expect(ofersPage.offersBanner).toBeExisting()
    })
})

