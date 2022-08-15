/// <reference types="cypress" />

describe("empty spec", () => {
  before(() => {
    cy.visit("https://www.prestashop.com/fr");
    cy.url().should("contain", "/fr");
  });

  it("changeLanguageFRToEng", () => {
    cy.get('[class="language"]')
      .first()
      .find('[data-toggle="dropdown"]')
      .should("contain", "FR");
    cy.get(
      ".col-xs-1 > .language > .background > .dropup > #dropdown-language > .material-icons"
    ).click();
    cy.get(
      ".col-xs-1 > .language > .background > .dropup > .dropdown-menu > .en > .language-link"
    ).click();
    cy.get('[class="language"]')
      .first()
      .find('[data-toggle="dropdown"]')
      .should("contain", "EN");
    cy.url().should("contain", "/en");
    cy.title().should(
      "eq",
      "Create and build your online business with PrestaShop"
    );
  });
});
