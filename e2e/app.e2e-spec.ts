import { LnkPage } from './app.po';

describe('lnk App', () => {
  let page: LnkPage;

  beforeEach(() => {
    page = new LnkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
