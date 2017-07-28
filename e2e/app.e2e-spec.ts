import { VoicesAppPage } from './app.po';

describe('voices-app App', () => {
  let page: VoicesAppPage;

  beforeEach(() => {
    page = new VoicesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
