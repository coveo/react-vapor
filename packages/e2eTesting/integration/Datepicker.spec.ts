context('Action', () => {
  before(() => {
    cy.visit('localhost:8080/#/components/DatePicker')
  });
	it('Validate Datepicker value', () => {
    var d = new Date();
    cy.get('fieldset[class="level-1 form-group mod-padding-children"]')
      .eq(0)
      .find('span[class="options-cycle-option"]')
      .eq(0).then((val) =>{
        cy.getMonthFromNumeralValue(val, d.getMonth());
      });
    cy.get('fieldset[class="level-1 form-group mod-padding-children"]')
      .eq(0)
      .find('span[class="options-cycle-option"]')
      .eq(1).then((val) =>{
        expect(val.text()).to.equal((d.getFullYear()).toString());
      });
		cy.get('fieldset[class="level-1 form-group mod-padding-children"]')
      .eq(0)
      .find('button[class="options-cycle-button next-option"]')
      .eq(0)
      .click(0);
    cy.get('fieldset[class="level-1 form-group mod-padding-children"]')
      .eq(0)
      .find('button[class="options-cycle-button next-option"]')
      .eq(1)
      .click(0);
    cy.get('fieldset[class="level-1 form-group mod-padding-children"]')
      .eq(0)
      .find('span[class="options-cycle-option"]')
      .eq(0).then((val) =>{
        cy.getMonthFromNumeralValue(val, d.getMonth()+1);
      });
    cy.get('fieldset[class="level-1 form-group mod-padding-children"]')
      .eq(0)
      .find('span[class="options-cycle-option"]')
      .eq(1).then((val) =>{
        expect(val.text()).to.equal((d.getFullYear()+1).toString());
      });
	});
  it('Validate Date range', () => {
    cy.get('fieldset[class="level-2 form-group mod-padding-children"]')
      .eq(0)
      .find('div[class="date-picker flex"] input[class="date-picked"]')
      .eq(0)
      .click({scrollBehavior:false})
    cy.xpath('//span[text()="10"]//parent::td')
      .eq(1)
      .click({scrollBehavior:false});
    cy.get('fieldset[class="level-2 form-group mod-padding-children"]')
      .eq(0)
      .find('div[class="date-picker flex"] input[class="date-picked"]')
      .eq(1)
      .click({scrollBehavior:false})
    cy.xpath('//span[text()="15"]//parent::td').eq(1).click({scrollBehavior:false});

  });
})