module.exports = {
    'Twist Loads' : function (browser) {
        browser
            .url('http://localhost:5000')
            .pause(1000);

        // expect element  to be present in 1000ms
        browser.expect.element('div.twist__form > form > textarea').to.be.present.before(1000);

        browser.end();
    },

    'Characters remaining is updated' : function (browser) {
        browser
            .url('http://localhost:5000')
            .pause(1000);

        // expect element  to be present in 1000ms
        browser.setValue('div.twist__form > form > textarea', 'My tailor is rich.');
        browser.assert.containsText('.character-count', '18');

        browser.end();
    },

    'Twist sent' : function (browser) {
        browser
            .url('http://localhost:5000')
            .pause(1000);

        // expect element  to be present in 1000ms
        browser.setValue('div.twist__form > form > textarea', 'My tailor is rich.');
        browser.click('div.twist__form > form > button');
        browser.pause(1000);
        browser.expect.element('.timeline > div > div.twist-list > div').to.be.present;
        browser.assert.containsText('.timeline > div > div.twist-list > div > p', 'My tailor is rich.');

        browser.end();
    }
};