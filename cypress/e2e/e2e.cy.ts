describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("contain", "Page 1");

    cy.get("p").should("exist");
    cy.get('[data-testid="page-2-link"]').click();
    cy.url().should("eq", "http://localhost:3000/page2");

    cy.intercept("/api/test").as("apiTest");
    cy.wait("@apiTest");

    cy.get("ul").find("li").should("have.length", 7);
  });
});
