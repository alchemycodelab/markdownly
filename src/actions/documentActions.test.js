import { UPDATE_MARKDOWN, updateMarkdown, ADD_TAB, addTab } from "./documentActions";

describe('document actions', () => {
  it('updates markdown', () => {
    let updatedInput;
    expect(updateMarkdown(updatedInput)).toEqual({
      type: UPDATE_MARKDOWN,
      payload: updatedInput
    });
  });
});
