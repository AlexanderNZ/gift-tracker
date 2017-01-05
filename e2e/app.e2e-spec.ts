import { GiftTrackerPage } from './app.po';

describe('gift-tracker App', function() {
  let page: GiftTrackerPage;

  beforeEach(() => {
    page = new GiftTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
