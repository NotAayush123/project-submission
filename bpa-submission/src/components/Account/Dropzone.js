import { Button, Group, Image, SimpleGrid, Text, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useState } from "react";

export function DropzoneButton(props) {
  const [files, setFiles] = useState([]);
  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <>
        {" "}
        <Image
          key={index}
          src={imageUrl}
          style={{ backgroundColor: "white" }}
        />
        <Button
          bg={"orange"}
          onClick={() => {
            const user = JSON.parse(localStorage.getItem("currentUser"));
            const newUser = { ...user, img: `${imageUrl}` };
            localStorage.setItem("currentUser", JSON.stringify(newUser));
            const id = user.id;
            const users = JSON.parse(localStorage.getItem("users"));
            const updatedUsersArray = users.map((u) =>
              u.id === id ? { ...u, img: `${imageUrl}` } : u
            );
            localStorage.setItem("users", JSON.stringify(updatedUsersArray));
            window.location.reload();
          }}
        >
          Use as profile picture
        </Button>
      </>
    );
  });
  return (
    <>
      <h3 className="mt-2">Set a profile picture</h3>
      <Dropzone
        onDrop={setFiles}
        style={{
          backgroundColor: "white",
          marginTop: "15px",
          borderRadius: "5px",
          border: "solid 1px #dee2e6",
        }}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={5 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        {...props}
      >
        <Group
          justify="center"
          gap="xl"
          mih={220}
          style={{ pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-blue-6)",
              }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-red-6)",
              }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-dimmed)",
              }}
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach one file to be your profile picture, make sure it doesn't
              exceed 5MB!
            </Text>
          </div>
        </Group>
      </Dropzone>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SimpleGrid
          cols={{ base: 1, sm: 4 }}
          mt={previews.length > 0 ? "xl" : 0}
        >
          {previews}
        </SimpleGrid>
      </div>
    </>
  );
}
