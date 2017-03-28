import { HNAngular2Page } from './app.po';

describe('hn-angular2 App', () => {
  let page: HNAngular2Page;

  beforeEach(() => {
    page = new HNAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
