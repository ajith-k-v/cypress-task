import { loginPageSelectors,homePageSelector,profilePageSelector } from "../../constants/selectors"
import { loginPageTexts,homePageText,profilePageText,path } from "../../constants/text"

export const loginPageElements=()=>{
    cy.url().should("include",path.loginPath);
    cy.get(loginPageSelectors.logo).should("be.visible");
    cy.get(loginPageSelectors.cardTitle).should("be.visible").should("have.text", loginPageTexts.cardTitle);
    cy.get(loginPageSelectors.emailLabel).should("be.visible").should("have.text", loginPageTexts.emailLabel);
    cy.get(loginPageSelectors.passwordLabel).should(($el) => {
     expect($el.contents().first().text().trim()).to.eq(loginPageTexts.passwordLabel);}).should("be.visible");
    cy.get(loginPageSelectors.forgotPassword).should("be.visible").should("have.text", loginPageTexts.forgotPassword);
    cy.get(loginPageSelectors.showPassword).should("have.text", loginPageTexts.showPassword);
    cy.get(loginPageSelectors.signUpText).should("be.visible",);
    cy.get(loginPageSelectors.checkBox).check();
    cy.get(loginPageSelectors.checkBox).uncheck();
    cy.get(loginPageSelectors.signUpText).should(($el) => {
     expect($el.contents().first().text().trim() ).to.eq(loginPageTexts.signUpText);}).should("be.visible");
    cy.get(loginPageSelectors.signUpLink).should("be.visible").should("have.text", loginPageTexts.signUpLink);

}

export const homePageElements=()=>{
    cy.get(homePageSelector.homePageLogo).should("be.visible");
    cy.get(homePageSelector.darkModeButton).should("be.visible");
    cy.get(homePageSelector.dropdownbtn).should("be.visible");
    cy.get(homePageSelector.pageHeader).should("be.visible").should("have.text", homePageText.pageHeader);
    cy.get(homePageSelector.pageTitle).should("be.visible").should("have.text", homePageText.pageTitle);
    cy.get(homePageSelector.pageImage).should("be.visible");
    cy.get(homePageSelector.createNewAppBtn).should("be.visible").should("have.text", homePageText.createNewAppBtn);
    cy.get(homePageSelector.importAppBtn).should("be.visible").should("have.text", homePageText.importAppBtn);
    cy.get(homePageSelector.chooseTemplateBtn).should("be.visible").should("have.text", homePageText.chooseTemplateBtn);
}

export const profilePageElements=()=>{
    cy.get(profilePageSelector.pageLogo).should("be.visible");
    cy.get(profilePageSelector.pageTitle).should("have.text", profilePageText.pageTitle);
    cy.get(profilePageSelector.profileCard).should("have.text", profilePageText.profileCard);
    cy.get(profilePageSelector.firstName).should("have.text", profilePageText.firstName);
    cy.get(profilePageSelector.lastName).should("have.text", profilePageText.lastName);
    cy.get(profilePageSelector.email).should("have.text", profilePageText.email);
    cy.get(profilePageSelector.updateBtn).should("be.visible");

    cy.get(profilePageSelector.passwordCard).should("have.text", profilePageText.passwordCard);
    cy.get(profilePageSelector.currentPassword).should("have.text", profilePageText.currentPasswordLabel);
    cy.get(profilePageSelector.newPassword).should("have.text", profilePageText.newPasswordLabel);
    cy.get(profilePageSelector.changePassBtn).should("be.visible");
}

export const navigateToProfile=()=>{
    cy.get(homePageSelector.dropdownlist).invoke("show");
    cy.contains("Profile").click();
    cy.url().should("include",path.profilePath);
}

export const logout=()=>{
    cy.get(homePageSelector.dropdownlist).invoke("show");
    cy.contains("Logout").click();
    cy.url().should("include",path.loginPath);
}