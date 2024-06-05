import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading } from "@chakra-ui/react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle post submission
    console.log("New Post Submitted", { title, content });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl">Create a New Post</Heading>
        <Box as="form" width="100%" onSubmit={handleSubmit}>
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title of your post"
            />
          </FormControl>
          <FormControl id="content" isRequired mt={4}>
            <FormLabel>Content</FormLabel>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter the content of your post"
              rows={10}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" mt={4}>Submit</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default NewPost;