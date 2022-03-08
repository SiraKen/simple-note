import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Loading from "../../components/loading";
import Error from "../../components/error";
import Layout from "../../layouts/default";
import axios from "axios";
import useSWR from "swr";
import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  Input,
  Textarea,
  Spinner,
} from "@chakra-ui/react";

export default function NoteIndex() {
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [formTitle, setFormTitle] = useState("");
  const [formBody, setFormBody] = useState("");
  const ref = useRef(null);

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/get", fetcher, {
    refreshInterval: 1000,
  });

  function createPost() {
    axios
      .post("/api/create", {
        title: formTitle,
        body: formBody,
      })
      .then((res) => {
        setFormTitle("");
        setFormBody("");
        ref.current.focus();
      })
      .catch((res) => {
        console.error(res);
      });
  }

  function hotKeyDown(e: any) {
    if (e.ctrlKey || e.metaKey) if (e.key === "Enter") createPost();
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heading mb={3}>Hello!</Heading>
        <Box
          background={"white"}
          shadow={"base"}
          borderRadius={"base"}
          padding={"5"}
          mb={5}
        >
          <Stack spacing={3}>
            <Input
              placeholder="Title"
              size="md"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              onKeyDown={(e) => hotKeyDown(e)}
              ref={ref}
            />
            <Textarea
              placeholder="Body"
              value={formBody}
              onChange={(e) => setFormBody(e.target.value)}
              onKeyDown={(e) => hotKeyDown(e)}
            />
            <Box>
              <Button
                variant="solid"
                size="md"
                colorScheme="facebook"
                onClick={() => createPost()}
              >
                Post
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box>
          {error ? (
            <Error />
          ) : !data ? (
            <Loading />
          ) : (
            <>
              <Stack spacing={2}>
                {data.map((d, i) => (
                  <React.Fragment key={i}>
                    <Box
                      background={"white"}
                      shadow={"base"}
                      borderRadius={"base"}
                      padding={"5"}
                    >
                      <Heading>{d.title}</Heading>
                      <Text>{d.body}</Text>
                    </Box>
                  </React.Fragment>
                ))}
              </Stack>
            </>
          )}
        </Box>
      </Layout>
    </>
  );
}
