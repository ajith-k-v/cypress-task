import {commonSelectors, loginPageSelectors, profilePageSelector} from '../constants/selectors'
import {loginPageTexts, profilePageText} from '../constants/text'
import { fake } from '../fixtures/fake'
import * as helper from '../support/utils/helperFunctions' 

Cypress.on('uncaught:exception', (err, runnable) => 
{
    return false;
});

describe("Tooljet task",()=>{
    let user;
    const invalidEmail = fake.email;
    const invalidPassword = fake.password;

    before(()=>{
        cy.fixture("credentials/login.json").then(login=>{
            user = login;
        });
        cy.visit("/");

    });
    it("Should verify elements on the login page",()=>{
        helper.loginPageElements();
    })
    it("Should verify login functionality",()=>{
        cy.get(loginPageSelectors.signInButton).click();
        cy.verifyToastMessage(commonSelectors.toastMessage, loginPageTexts.toastMessage);

        cy.clearAndType(loginPageSelectors.emailTextField, invalidEmail);
        cy.get(loginPageSelectors.signInButton).click();
        cy.verifyToastMessage(commonSelectors.toastMessage, loginPageTexts.toastMessage);
        
        cy.get(loginPageSelectors.emailTextField).clear();
        cy.clearAndType(loginPageSelectors.passwordTextField, invalidPassword);
        cy.get(loginPageSelectors.signInButton).click();
        cy.verifyToastMessage(commonSelectors.toastMessage, loginPageTexts.toastMessage);
        
        cy.clearAndType(loginPageSelectors.emailTextField, user.email);
        cy.get(loginPageSelectors.passwordTextField).clear();
        cy.get(loginPageSelectors.signInButton).click();
        cy.verifyToastMessage(commonSelectors.toastMessage, loginPageTexts.toastMessage);

        cy.get(loginPageSelectors.emailTextField).clear();
        cy.clearAndType(loginPageSelectors.passwordTextField, user.password);
        cy.get(loginPageSelectors.signInButton).click();
        cy.verifyToastMessage(commonSelectors.toastMessage, loginPageTexts.toastMessage);
    })

    it("Should login and verify home page elements",()=>{

        cy.loginViaUI(user.email,user.password);
        helper.homePageElements();
    })

    it("should verify the password reset functionality",()=>{

        cy.loginViaUI(user.email,user.password);
        helper.navigateToProfile();
        helper.profilePageElements();

        cy.get(profilePageSelector.changePassBtn).click();
        cy.verifyToastMessage(commonSelectors.toastMessage,profilePageText.errorToastMessage);

        cy.clearAndType(profilePageSelector.currentPasswordField, user.password);
        cy.get(profilePageSelector.changePassBtn).click();
        cy.verifyToastMessage(commonSelectors.toastMessage,profilePageText.toastMessage);

        cy.clearAndType(profilePageSelector.currentPasswordField, profilePageText.newPassword);
        cy.get(profilePageSelector.changePassBtn).click();
        cy.verifyToastMessage(commonSelectors.toastMessage,profilePageText.errorToastMessage);

        cy.get(profilePageSelector.currentPasswordField).clear();
        cy.clearAndType(profilePageSelector.newPasswordFirld,profilePageText.newPassword);
        cy.get(profilePageSelector.changePassBtn).click();
        cy.verifyToastMessage(commonSelectors.toastMessage,profilePageText.errorToastMessage);

        cy.clearAndType(profilePageSelector.currentPasswordField, profilePageText.newPassword);
        cy.clearAndType(profilePageSelector.newPasswordFirld,user.password);
        cy.get(profilePageSelector.changePassBtn).click();
        cy.verifyToastMessage(commonSelectors.toastMessage,profilePageText.errorToastMessage);

        cy.clearAndType(profilePageSelector.currentPasswordField, user.password);
        cy.clearAndType(profilePageSelector.newPasswordFirld,user.password);
        cy.get(profilePageSelector.changePassBtn).click();
        cy.verifyToastMessage(commonSelectors.toastMessage,profilePageText.toastMessage);

        cy.clearAndType(profilePageSelector.currentPasswordField, user.password);
        cy.clearAndType(profilePageSelector.newPasswordFirld,profilePageText.newPassword);
        cy.get(profilePageSelector.changePassBtn).click();
        cy.verifyToastMessage(commonSelectors.toastMessage,profilePageText.toastMessage);

        helper.logout();

        cy.loginViaUI(user.email,user.password);
        cy.verifyToastMessage(commonSelectors.toastMessage, loginPageTexts.toastMessage);

        cy.loginViaUI(user.email,profilePageText.newPassword);
        helper.navigateToProfile();

        cy.clearAndType(profilePageSelector.currentPasswordField,profilePageText.newPassword);
        cy.clearAndType(profilePageSelector.newPasswordFirld,user.password);
        cy.get(profilePageSelector.changePassBtn).click();
        cy.verifyToastMessage(commonSelectors.toastMessage,profilePageText.toastMessage);
        helper.logout();

        cy.loginViaUI(user.email,user.password);
        helper.logout();

    })

})