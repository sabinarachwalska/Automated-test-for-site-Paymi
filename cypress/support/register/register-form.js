class RegisterForm {
  promoReferralCodeInput() {
    return cy.get("#user_referral_sign_up_code").should("be.visible");
  }

  promoReferralCodeInputLabel(number) {
    return cy
      .get(":nth-child(" + number + ") > #email-label")
      .should("be.visible");
  }

  termsLabel() {
    return cy.get("#terms-label > span").should("be.visible");
  }

  checkboxLabel(number) {
    return cy
      .get(":nth-child(" + number + ") > label > span")
      .should("be.visible");
  }

  registerLink() {
    return cy.get(".registration-links > div").should("be.visible");
  }

  registerLinkDiv() {
    return cy.get(".registration-links > div").should("be.visible");
  }
}

export default RegisterForm;
