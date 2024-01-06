import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button, Tooltip } from "@mantine/core";
import "@mantine/tiptap/styles.css";
let content =
  "<h2>Write your description!</h2> Feel free to explore all the features, like links, font sizes, and so much more!";

export function ProfileDesc({ onSave, onCancel, read, value }) {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content,
    editable: read ? false : true,
  });
  if (value) {
    content = value;
  }
  return (
    <>
      <RichTextEditor editor={editor} style={{ backgroundColor: "white" }}>
        {!read && (
          <RichTextEditor.Toolbar sticky stickyOffset={60}>
            <RichTextEditor.ControlsGroup>
              <Tooltip label="Bold">
                <RichTextEditor.Bold />
              </Tooltip>
              <Tooltip label="Italic">
                <RichTextEditor.Italic />
              </Tooltip>
              <Tooltip label="Strikethrough">
                <RichTextEditor.Strikethrough />
              </Tooltip>
              <Tooltip label="Clear Formatting">
                <RichTextEditor.ClearFormatting />
              </Tooltip>
              <Tooltip label="Code">
                <RichTextEditor.Code />
              </Tooltip>
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <Tooltip label="H1">
                <RichTextEditor.H1 />
              </Tooltip>
              <Tooltip label="H2">
                <RichTextEditor.H2 />
              </Tooltip>
              <Tooltip label="H3">
                <RichTextEditor.H3 />
              </Tooltip>
              <Tooltip label="H4">
                <RichTextEditor.H4 />
              </Tooltip>
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <Tooltip label="Blockquote">
                <RichTextEditor.Blockquote />
              </Tooltip>
              <Tooltip label="Horizontal Line">
                <RichTextEditor.Hr />
              </Tooltip>
              <Tooltip label="Ordered List">
                <RichTextEditor.OrderedList />
              </Tooltip>
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <Tooltip label="Insert Link">
                <RichTextEditor.Link />
              </Tooltip>
              <Tooltip label="Remove Link">
                <RichTextEditor.Unlink />
              </Tooltip>
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>
        )}

        <RichTextEditor.Content />
      </RichTextEditor>
      {!read && (
        <>
          {" "}
          <Button fullWidth color="gray" className="mt-3" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            fullWidth
            className="mt-3"
            onClick={() => {
              const html = editor.getHTML();
              onSave(html);
            }}
          >
            Save
          </Button>{" "}
        </>
      )}
    </>
  );
}
