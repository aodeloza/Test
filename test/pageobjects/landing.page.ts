import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#cmp-image__image cmp-global-header__logo-img');
    }

    /**
    * hollandLogo - Selector for landing page in Holland
    */
    public get hollandLogo() {
        return $('[aria-label="Holland America Line Logo"]')
    }

    /**
     * seabournLogo - Selector for landing page in seabourn
     */
    public get seabournLogo() {
        return $('[aria-label="Seabourn Logo"]')
    }

    /**
    * offersWidget - Selector for offers widget
    */
    public get offersWidget() {
        return $('//a[text()="Ofertas"]')
    }

    /**
    * allCruiseOffers - Selector for offers widget
    */
    public get allCruiseOffers() {
        return $('//a[text()="Todas las ofertas de cruceros"]')
    }

    /**
     * offersNavClick - it performs a click at nav widget from landing page
     */
        public async offersNavClick () {
            await this.offersWidget.click();
        }

    /**
     * allCruiseOffersClick - it performs a click at nav widget from landing page
     */
        public async allCruiseOffersClick () {
            await this.allCruiseOffers.click();
        }

    /**
     * Launching Landing Page
     * 
     */
    public open (baseUrl:string) {
        return super.open(baseUrl);
    }
}

export default new LandingPage();
