const { baseUrl } = require("../support/register/authorization-config");
import Header from "../support/core/menu/header";
import {
  generatePassword,
  generateRandomNumber,
  randomEmail,
} from "../support/core/table/user-data";
import Layout from "../support/layout/layout";
import LoginForm from "../support/register/login-form";
import RegisterForm from "../support/register/register-form";

describe("User register test (positive parth)", () => {
  //Ideally test should delete this user but I don't have access to admin account or sql server to delete it from base. Deactivation wouldn't help because it still saved in base

  const loginForm = new LoginForm();
  const registerForm = new RegisterForm();
  const layout = new Layout();
  const header = new Header();

  beforeEach(() => {
    Cypress.Cookies.defaults({
      preserve: ["session_id", "remember_token"],
    });
  });
  afterEach(() => {
    cy.restoreLocalStorage();
  });

  it('1. Navigates to login pane and click on "Create an account" text', () => {
    cy.visit(baseUrl.url + "users/sign_in");
    layout.pageImageLogo();
    layout
      .pageSubtitle()
      .should("have.text", "Welcome back!")
      .should("have.css", "font-weight", "800");
    loginForm.emailInputLabel().contains("Email");
    loginForm.emailInput();
    loginForm.passwordInputLabel().contains("Password");
    loginForm.passwordInput();
    loginForm
      .signInButton()
      .contains("Sign in")
      .should("have.css", "background-color", "rgb(217, 47, 0)");
    loginForm
      .registrationLinks(1)
      .contains("Forgot your password?")
      .should("have.css", "text-decoration", "underline solid rgb(26, 90, 168)")
      .click();
    cy.url().should("contain", baseUrl.url + "users/password/new");
    layout.buttonLink().contains("Cancel").click();
    cy.url().should("contain", baseUrl.url + "users/sign_in");
    loginForm.registerBlock(2).contains("Not a member?");
    loginForm.passwordToogle();
    layout.languageChangeToogle().contains("Français").click();
    cy.url().should("contain", baseUrl.url + "users/sign_in?lang=fr");
    layout.languageChangeToogle().contains("English").click();
    cy.url().should("contain", baseUrl.url + "users/sign_in");
    loginForm
      .registrationLinks(2)
      .contains("Create an account")
      .should("have.css", "text-decoration", "underline solid rgb(26, 90, 168)")
      .click();
  });

  it("2. Veryfies registration page and fills a form", () => {
    cy.url().should("contain", baseUrl.url + "users/sign_up");
    layout
      .textLink()
      .contains("Log In")
      .should(
        "have.css",
        "text-decoration",
        "underline solid rgb(26, 90, 168)"
      );
    layout.pageImageLogo();
    layout
      .pageSubtitle()
      .should("contain", "Sign up with email.")
      .should("have.css", "font-weight", "800");
    loginForm.emailInputLabel().contains("Email");
    loginForm.emailInput().type(randomEmail);
    loginForm.passwordInputLabel().contains("Password");
    loginForm.passwordInput().type(generatePassword);
    loginForm.passwordInput().should("have.attr", "type", "password");
    loginForm.passwordToogle().click();
    loginForm.passwordInput().should("have.attr", "type", "text");
    registerForm
      .promoReferralCodeInputLabel(6)
      .contains("Promo/Referral Code (optional)");
    registerForm.promoReferralCodeInput().type(generateRandomNumber);
    registerForm
      .termsLabel()
      .contains("I agree to Paymi's Terms and Conditions")
      .click();
    registerForm
      .checkboxLabel(8)
      .contains(
        "Opt in to get the best of Paymi offers, promotions, news and more."
      )
      .click();
    registerForm.registerLinkDiv().contains("Already a member? Log In");
  });

  it("3. Clicks on 'Sign up' button", () => {
    layout
      .button()
      .contains("Sign up")
      .should("have.css", "background-color", "rgb(217, 47, 0)")
      .click();
    loginForm.emailInput().type(randomEmail);
    loginForm.passwordInput().type(generatePassword);
    loginForm.signInButton().contains("Sign in").click();
    cy.visit(baseUrl.url + "dashboard/how-to");
  });

  it("4. Veryfies header if user is logged to an application ", () => {
    header.navbar();
    header.navbarLogo();
    header.navbarContent(1).contains("Offers");
    header.navbarContent(2).contains("Refer and Earn");
    header.navbarContent(3).contains("History $0.00");
    header.userMenuToogle().contains("My Account").click();
  });
});
