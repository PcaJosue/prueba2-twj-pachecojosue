import { PasteleriaexamPage } from './app.po';

describe('pasteleriaexam App', function() {
  let page: PasteleriaexamPage;

  beforeEach(() => {
    page = new PasteleriaexamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
