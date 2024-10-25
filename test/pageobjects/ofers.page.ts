import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OffersPage extends Page {

    /**
     * define selectors using getter methods
     */
    public get offersBanner () {
        return $('//div[@class="hero-title"]//*[text()="Ofertas y promociones de cruceros"]')
    }

    // /**
    //  * overwrite specific options to adapt it to page object
    //  * 
    //  */
    // public open (baseUrl:string) {
    //     return super.open(baseUrl);
    // }
}

export default new OffersPage();
