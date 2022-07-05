class LoginForm {
  emailInputLabel() {
    return cy.get("#email-label").should("be.visible");
  }

  passwordInputLabel() {
    return cy.get("#password-label").should("be.visible");
  }

  emailInput() {
    return cy.get("#user_email").should("be.visible");
  }

  passwordInput() {
    return cy.get("#user_password").should("be.visible");
  }

  passwordToogle() {
    return cy.get(".toggle-password").should("be.visible");
  }

  signInButton() {
    return cy.get("#log_in").should("be.visible");
  }

  registrationLinks(number) {
    return cy
      .get(".registration-links > :nth-child(" + number + ") > .text-link")
      .should("be.visible");
  }

  registerBlock(number) {
    return cy
      .get(".registration-links > :nth-child(" + number + ")")
      .should("be.visible");
  }
}

export default LoginForm;
