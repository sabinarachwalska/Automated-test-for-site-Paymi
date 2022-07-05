class Header {
  navbar() {
    return cy.get(".navbar").should("be.visible");
  }

  navbarLogo() {
    return cy.get(".navbar-brand").should("be.visible");
  }

  navbarContent(number) {
    return cy.get(".nav > :nth-child(" + number + ") > a").should("be.visible");
  }

  userMenuToogle() {
    return cy.get(".dropdown-toggle").should("be.visible");
  }
}

export default Header;
