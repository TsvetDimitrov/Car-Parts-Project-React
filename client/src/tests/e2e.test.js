const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://localhost:3000'; // Application host (NOT service host - that can be anything)
const interval = 300;
const DEBUG = false;
const slowMo = 500;

const mockData = require('./sampleUserData.json');

const endpoints = {
    register: '/register',
    login: '/login',
    logout: '/logout',
    create: '/create',
    buyoutPage: '/izkupuvane',
    buyoutPageInfo: '/izkupuvane/info',
    aboutUs: '/aboutUs'
};

let browser;
let context;
let page;

describe('E2E tests', function() {
    // Setup
    this.timeout(DEBUG ? 120000 : 6000);
    before(async() => browser = await chromium.launch(DEBUG ? { headless: false, slowMo } : {}));
    after(async() => await browser.close());
    beforeEach(async() => {
        context = await browser.newContext();
        setupContext(context);
        page = await context.newPage();
    });
    afterEach(async() => {
        await page.close();
        await context.close();
    });


    // Test proper
    describe('Authentication', () => {
        it('register does not work with empty fields', async() => {
            const { post } = await handle(endpoints.register);
            const isCalled = post().isHandled;

            await page.goto(host);
            await page.waitForTimeout(interval);

            await page.click('[href="/login"]');

            await page.click('[href="/register"]');

            await page.click('[name="name"]');

            await page.click('[name="email"]');

            await page.click('[name="telNumber"]');

            await page.click('[name="password"]');

            await page.click('[name="agreement_1"]');

            await page.click('[name="agreement_2"]');

            await page.waitForSelector('form');
            await page.click('[type="submit"]');

            await page.waitForTimeout(interval);

            expect(isCalled()).to.be.false;
        });

        it('register makes correct API call', async() => {
            const data = mockData.users[0];
            const { post } = await handle(endpoints.register);
            const { onRequest } = post(data);

            await page.goto(host);
            await page.waitForTimeout(interval);

            await page.click('[href="/login"]');
            await page.waitForTimeout(interval);

            await page.click('[href="/register"]');

            await page.waitForTimeout(interval);
            await page.waitForSelector('form');

            await page.fill('[name="name"]', data.name);
            await page.fill('[name="email"]', data.email);
            await page.fill('[name="telNumber"]', data.telName);
            await page.fill('[name="password"]', data.password);
            await page.fill('[name="repeatPass"]', data.password);
            await page.click('[name="agreement_1"]');

            await page.click('[name="agreement_2"]');

            const [request] = await Promise.all([
                onRequest(),
                page.click('[type="submit"]')
            ]);

            const postData = JSON.parse(request.postData());

            expect(postData.name).to.equal(data.name);
            expect(postData.password).to.equal(data.password);
        });

        it('login makes correct API call', async() => {
            const data = mockData.users[0];
            const { post } = await handle(endpoints.login);
            const { onRequest } = post(data);

            await page.goto(host);
            await page.waitForTimeout(interval);
            await page.click('[href="/login"]');

            await page.waitForTimeout(interval);
            await page.waitForSelector('form');

            await page.fill('[name="email"]', data.email);
            await page.fill('[name="password"]', data.password);


            const [request] = await Promise.all([
                onRequest(),
                page.click('[type="submit"]')
            ]);

            const postData = JSON.parse(request.postData());
            expect(postData.email).to.equal(data.email);
            expect(postData.password).to.equal(data.password);
        });

        it('logout makes correct API call', async() => {
            const data = mockData.users[0];
            const { post } = await handle(endpoints.login);
            const { get } = await handle(endpoints.logout);
            const { onResponse } = post(data);
            const { onRequest } = get('', { json: false, status: 204 });

            await page.goto(host);
            await page.click('[href="/login"]');
            await page.waitForTimeout(interval);
            await page.waitForSelector('form');
            await page.fill('[name="email"]', data.email);
            await page.fill('[name="password"]', data.password);

            await Promise.all([
                onResponse(),
                page.click('[type="submit"]')
            ]);

            await page.waitForTimeout(interval);

            const [request] = await Promise.all([
                onRequest(),
                page.click('text=Изход')
            ]);
            const sessionStorage = await page.evaluate(() => sessionStorage);
            expect(sessionStorage).to.be.empty;
            expect(request.method()).to.equal('GET');
        });
    });

    describe('Navigation bar', () => {
        const email = 'cecko@abv.bg';
        const password = '123';

        it('logged user should see correct navigation', async () => {
            // Login user
            const endpoint = '**' + endpoints.login;


            await page.goto(host);
            await page.click('[href="/login"]');

            await page.waitForTimeout(300);
            await page.waitForSelector('form');

            await page.fill('[name="email"]', "test@abv.bg");
            await page.fill('[name="password"]', "123");

            await page.waitForTimeout(300);
            
            await Promise.all([
                page.waitForResponse(endpoint),
                page.click('[type="submit"]')
            ]);
            //Test for navigation
            await page.waitForTimeout(300);

            expect(await page.isVisible('.topnav >> text="Изход"')).to.be.true;


        });

        it('guest user should see correct navigation', async () => {
            await page.goto(host);

            await page.waitForTimeout(300);

            expect(await page.isVisible('text="Вход"')).to.be.true;
        });

        
        it('admin user should see correct navigation', async () => {
            const endpoint = '**' + endpoints.login;


            await page.goto(host);
            await page.click('[href="/login"]');

            await page.waitForTimeout(300);
            await page.waitForSelector('form');

            await page.fill('[name="email"]', email);
            await page.fill('[name="password"]', password);

            await page.waitForTimeout(300);

            await Promise.all([
                page.waitForResponse(endpoint),
                page.click('[type="submit"]')
            ]);
            //Test for navigation
            await page.waitForTimeout(300);

            expect(await page.isVisible('.admin')).to.be.true;

        });
    });

  
});

function handle(match, handlers) {
    return handleRaw.call(page, match, handlers);
}

async function handleRaw(match, handlers) {
    const methodHandlers = {};
    const result = {
        get: (returns, options) => request('GET', returns, options),
        post: (returns, options) => request('POST', returns, options),
        put: (returns, options) => request('PUT', returns, options),
        patch: (returns, options) => request('PATCH', returns, options),
        del: (returns, options) => request('DELETE', returns, options),
        delete: (returns, options) => request('DELETE', returns, options)
    };

    const context = this;

    await context.route(urlPredicate, (route, request) => {
        if (DEBUG) {
            console.log('>>>', request.method(), request.url());
        }

        const handler = methodHandlers[request.method().toLowerCase()];
        if (handler == undefined) {
            route.continue();
        } else {
            handler(route, request);
        }
    });

    if (handlers) {
        for (let method in handlers) {
            if (typeof handlers[method] == 'function') {
                handlers[method](result[method]);
            } else {
                result[method](handlers[method]);
            }
        }
    }

    return result;

    function request(method, returns, options) {
        let handled = false;
        methodHandlers[method.toLowerCase()] = (route, request) => {
            handled = true;
            route.fulfill(respond(returns, options));
        };

        return {
            onRequest: () => context.waitForRequest(urlPredicate),
            onResponse: () => context.waitForResponse(urlPredicate),
            isHandled: () => handled,
        };
    }

    function urlPredicate(current) {
        if (current instanceof URL) {
            return current.href.toLowerCase().includes(match.toLowerCase());
        } else {
            return current.url().toLowerCase().includes(match.toLowerCase());
        }
    }
};

async function setupContext(context) {
    // Authentication
    await handleContext(context, endpoints.login, { post: mockData.users[0] });
    await handleContext(context, endpoints.register, { post: mockData.users[0] });
    await handleContext(context, endpoints.logout, { get: h => h('', { json: false, status: 204 }) });

    // Catalog and Details
    await handleContext(context, endpoints.catalog, { get: mockData.catalog });
    await handleContext(context, endpoints.details('1001'), { get: mockData.catalog[0] });
    await handleContext(context, endpoints.details('1002'), { get: mockData.catalog[1] });
    await handleContext(context, endpoints.details('1003'), { get: mockData.catalog[2] });

    // Profile Page
    await handleContext(context, endpoints.profile('0001'), { get: mockData.catalog.slice(0, 2) });

    // Block external calls
    await context.route(url => url.href.slice(0, host.length) != host, route => {
        if (DEBUG) {
            console.log('Preventing external call to ' + route.request().url());
        }
        route.abort();
    });
}

function respond(data, options = {}) {
    options = Object.assign({
        json: true,
        status: 200
    }, options);

    const headers = {
        'Access-Control-Allow-Origin': '*'
    };
    if (options.json) {
        headers['Content-Type'] = 'application/json';
        data = JSON.stringify(data);
    }

    return {
        status: options.status,
        headers,
        body: data
    };
}