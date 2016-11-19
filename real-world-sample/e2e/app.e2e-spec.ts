import { RealWorldSamplePage } from './app.po';

describe('real-world-sample App', function() {
  let page: RealWorldSamplePage;

  beforeEach(() => {
    page = new RealWorldSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
