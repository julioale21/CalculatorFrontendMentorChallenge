import { Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Display from "./components/Display";

const App = () => {
  return (
    <Stack alignItems="center" backgroundColor="blue.800" height="100vh">
      <Stack width="300px">
        <Stack paddingTop={24}>
          <Stack direction="row" justifyContent="space-between" marginBottom={2}>
            <Text color="white" fontWeight="bold">
              calc
            </Text>
            <Text color="red">Toggle theme</Text>
          </Stack>

          <Display value={399.981} />

          <Stack backgroundColor="gray.800" borderRadius="5px" padding={3}>
            <Grid gap={2} templateColumns="repeat(4, 1fr)">
              <Button boxShadow="1px 3px gray">7</Button>
              <Button boxShadow="1px 3px gray">8</Button>
              <Button boxShadow="1px 3px gray">9</Button>
              <Button backgroundColor="blue.700" boxShadow="1px 3px #0c4271">
                DEL
              </Button>
              <Button boxShadow="1px 3px gray">4</Button>
              <Button boxShadow="1px 3px gray">5</Button>
              <Button boxShadow="1px 3px gray">6</Button>
              <Button boxShadow="1px 3px gray">+</Button>
              <Button boxShadow="1px 3px gray">1</Button>
              <Button boxShadow="1px 3px gray">2</Button>
              <Button boxShadow="1px 3px gray">3</Button>
              <Button boxShadow="1px 3px gray">-</Button>
              <Button boxShadow="1px 3px gray">.</Button>
              <Button boxShadow="1px 3px gray">0</Button>
              <Button boxShadow="1px 3px gray">/</Button>
              <Button boxShadow="1px 3px gray">x</Button>
              <GridItem colSpan={2}>
                <Button
                  backgroundColor="blue.700"
                  boxShadow="1px 3px #0c4271"
                  color="white"
                  fontSize="xs"
                  size="sm"
                  width="100%"
                >
                  RESET
                </Button>
              </GridItem>
              <GridItem colSpan={2}>
                <Button
                  backgroundColor="red.500"
                  boxShadow="1px 3px #962d2d"
                  color="white"
                  fontSize="xs"
                  size="sm"
                  width="100%"
                >
                  =
                </Button>
              </GridItem>
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default App;
