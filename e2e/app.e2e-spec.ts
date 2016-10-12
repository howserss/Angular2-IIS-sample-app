import { NoteApp2Page } from './app.po';

describe('note-app2 App', function() {
  let page: NoteApp2Page;

  beforeEach(() => {
    page = new NoteApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
