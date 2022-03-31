export const commonSelectors={
    toastMessage: ".go318386747"
}

export const loginPageSelectors={
    logo:".navbar-brand-autodark",
    cardTitle:".card-title",
    emailTextField:"[data-testid=emailField]",
    emailLabel:".mb-3 > .form-label",
    passwordTextField:"[data-testid=passwordField]",
    passwordLabel:".mb-2 > .form-label",
    forgotPassword:".form-label-description",
    checkBox:"#check-input",
    showPassword:".form-check-label",
    signInButton: "[data-testid=loginButton]",
    signUpText:".mt-3",
    signUpLink: ".text-secondary > a",
}

export const homePageSelector={
    homePageLogo:"a > svg",
    darkModeButton:".p-1 > svg",
    pageHeader:".empty-welcome-header",
    pageImage:"img",
    pageTitle:".empty-title",
    createNewAppBtn:".empty-action > :nth-child(1)",
    importAppBtn:".empty-action > :nth-child(2)",
    chooseTemplateBtn:".empty-action > :nth-child(3)",
    dropdownbtn:".avatar",
    dropdownlist:".dropdown-menu",    
}

export const profilePageSelector={
    pageLogo:".navbar-brand",
    pageTitle:".page-title",
    profileCard:".card-title:eq(0)",
    firstName:".form-label:eq(0)",
    lastName:".form-label:eq(1)",
    email:".form-label:eq(2)",
    passwordCard:".card-title:eq(1)",
    currentPassword:".form-label:eq(3)",
    newPassword:".form-label:eq(4)",
    updateBtn:".btn:eq(0)",
    changePassBtn:":nth-child(3) > .card-body > .btn",
    currentPasswordField:".form-control:eq(3)",
    newPasswordFirld:".form-control:eq(4)",
}