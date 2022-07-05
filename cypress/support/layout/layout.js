class Layout {
  pageSubtitle() {
    return cy.get(".form-tagline").should("be.visible");
  }

  pageImageLogo() {
    return cy.get(".register-brand").should("be.visible");
  }

  languageChangeToogle() {
    return cy.get("li > .text-link").should("be.visible");
  }

  button() {
    return cy.get(".btn").should("be.visible");
  }

  buttonLink() {
    return cy.get(".btn-link").should("be.visible");
  }

  textLink() {
    return cy.get("div > .text-link").should("be.visible");
  }

  spanLink() {
    return cy.get("span > .text-link").should("be.visible");
  }

  linkContent(number) {
    return cy.get(":nth-child(" + number + ") > a").should("be.visible");
  }

  information() {
    return cy.get(".container > p").should("be.visible");
  }

  errorBox() {
    return cy.get(".error-box__errors > li").should("be.visible");
  }
}

export default Layout;
