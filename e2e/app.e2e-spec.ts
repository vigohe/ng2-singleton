import { Ng2SingletonPage } from './app.po';

describe('ng2-singleton App', function() {
  let page: Ng2SingletonPage;

  beforeEach(() => {
    page = new Ng2SingletonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
