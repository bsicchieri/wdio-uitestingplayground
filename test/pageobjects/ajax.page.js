

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AjaxPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnTriggeringAjax () {
        return $('#ajaxButton');
    }

    get allLabelText () {
        return $('#content');
    }

    get labelText () {
        return this.allLabelText.$$('.bg-success')
    }

    async getLabelText(){
        this.labelText.filter((element) => {
            console.log(element.getText())
        })
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickBtnTriggeringAjaxRequest () {
        await this.btnTriggeringAjax.click();
        await this.btnTriggeringAjax.click();
        await this.btnTriggeringAjax.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('ajax');
    }
}

module.exports = new AjaxPage();