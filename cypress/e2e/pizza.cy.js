describe('Pizza order form', () => {
    const baseUrl = 'http://localhost:5173';

    beforeEach(() => {
        cy.visit(`${baseUrl}/order-form`);
    });
    it('renders the pizza order form', () => {
        cy.get('form').should('exist');
        cy.get('input[name="name"]').should('exist');
        cy.get('input[type="radio"][name="size"]').should('have.length', 3);
        cy.get('select[name="dough"]').should('exist');
        cy.get('input[type="checkbox"][name="extra"]').should('have.length.at.least', 1);
        cy.get('textarea[name="orderNote"]').should('exist');
        cy.contains('button', 'Siparişi Tamamla').should('exist');
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
        cy.get('input#large').check({ force: true });
        cy.get('select[name="dough"]').select('thick');
        cy.get('input[name="extra"]').check(['Pepperoni', 'Soğan']);
        cy.get('textarea[name="orderNote"]').type('Sipariş Notum Sıcak gelsin');
        cy.contains('button', 'Siparişi Tamamla').click();

        cy.wait('@createOrder');
        cy.url().should('include', '/order-success');
    });
});
describe('Pizza order form validation', () => {
    const baseUrl = 'http://localhost:5173';

    beforeEach(() => {
        cy.visit(`${baseUrl}/order-form`);
    });

    it('shows validation errors when submitting an empty form', () => {
        cy.contains('button', 'Siparişi Tamamla').click();
        cy.contains('Boyut seçmelisiniz.').should('be.visible');
        cy.contains('Hamur seçmelisiniz.').should('be.visible');
    });

    it('shows an error when selecting more than 10 extra ingredients', () => {
        const extrasToSelect = ['Pepperoni', 'Tavuk Izgara', 'Mısır', 'Sarımsak', 'Ananas', 'Sosis', 'Soğan', 'Sucuk', 'Biber', 'Kabak', 'Kanada Jambonu'];
        extrasToSelect.forEach(extra => {
            cy.get(`input[name="extra"][value="${extra}"]`).check({ force: true });
        });
        cy.contains('En fazla 10 tane malzeme seçebilirsiniz.').should('be.visible');
    });
});
describe('Main page navigation', () => {
    const baseUrl = 'http://localhost:5173';

    beforeEach(() => {
        cy.visit(baseUrl);
    });
    it('renders the main page', () => {
        cy.contains('KOD ACIKTIRIR PİZZA, DOYURUR').should('be.visible');
        cy.contains('SİPARİŞ VER').should('be.visible');
        cy.contains('Acıktım').should('be.visible');
    });

    it('navigates to the order form page when "Hemen Sipariş Ver" button is clicked', () => {
        cy.contains('SİPARİŞ VER').click();
        cy.url().should('include', '/order-form');
    });

    it('shows the order success page after submitting the order form', () => {
        cy.visit(`${baseUrl}/order-form`);
        cy.get('input[name="name"]').type('Mert Saydan');
        cy.get('input#large').check({ force: true });
        cy.get('select[name="dough"]').select('thick');
        cy.get('input[name="extra"]').check(['Pepperoni', 'Soğan']);
        cy.get('textarea[name="orderNote"]').type('Sipariş Notum Sıcak gelsin');
        cy.contains('button', 'Siparişi Tamamla').click();
        cy.url().should('include', '/order-success');
    });
});

