describe('Pizza order form', () => {
  const baseUrl = 'http://localhost:5173';

  beforeEach(() => {
    cy.visit(`${baseUrl}/order-form`);
  });

  it('allows typing a name into the name input', () => {
    cy.get('input[name="name"]').type('Mert Saydan').should('have.value', 'Mert Saydan');
  });

  it('allows selecting more than one extra ingredient', () => {
    cy.get('input[name="extra"]').check(['Pepperoni', 'Soğan', 'Kabak']);
    cy.get('input[name="extra"]').each(($checkbox) => {
      const value = $checkbox.attr('value');
      if (['Pepperoni', 'Soğan', 'Kabak'].includes(value)) {
        cy.wrap($checkbox).should('be.checked');
      }
    });
  });

  it('fills and submits the pizza order form', () => {
    cy.intercept('POST', 'https://reqres.in/api/users', (req) => {
      expect(req.body).to.include({
        isim: 'Mert Saydan',
        boyut: 'L',
        özel: 'Sipariş Notum Sıcak gelsin',
        quantity: 1,
        totalPrice: '120.50'
      });
      expect(req.body.malzemeler).to.deep.equal(['Pepperoni', 'Soğan']);
      req.reply({
        statusCode: 201,
        body: {
          id: '539',
          createdAt: '2026-05-05T08:30:00.075Z',
          isim: 'Mert Saydan',
          boyut: 'L',
          malzemeler: ['Pepperoni', 'Soğan'],
          özel: 'Sipariş Notum Sıcak gelsin',
          quantity: 1,
          totalPrice: '150.50'
        }
      });
    }).as('createOrder');

    cy.get('input[name="name"]').type('Mert Saydan');
    cy.get('input#large').check({force: true});
    cy.get('select[name="dough"]').select('thick');
    cy.get('input[name="extra"]').check(['Pepperoni', 'Soğan']);
    cy.get('textarea[name="orderNote"]').type('Sipariş Notum Sıcak gelsin');
    cy.contains('button', 'Siparişi Tamamla').click();

    cy.wait('@createOrder');
    cy.url().should('include', '/order-success');
  });
});
