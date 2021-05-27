import React from "react";
import { Stack, Grid, Button, GridItem, Text } from "@chakra-ui/react";
import Display from "./Display";

const Calculator = () => {
  return (
    <Stack width={{ base: "325px" }}>
      <Stack paddingTop={24}>
        <Stack direction="row" justifyContent="space-between" marginBottom={2}>
          <Text color="white" fontSize="2.1rem" fontWeight="bold">
            calc
          </Text>
          <Text color="red">Toggle theme</Text>
        </Stack>

        <Display value={399.981} />

        <Stack
          backgroundColor="gray.800"
          borderRadius="5px"
          height={{ base: "420px" }}
          padding="1.6rem"
        >
          <Grid gap={3} templateColumns="repeat(4, 1fr)">
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              7
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              8
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              9
            </Button>
            <Button
              backgroundColor="blue.700"
              boxShadow="1px 5px #0c4271"
              color="white"
              fontSize="xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              DEL
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              4
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              5
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              6
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              +
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              1
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              2
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              3
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              -
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              .
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              0
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              /
            </Button>
            <Button
              boxShadow="1px 5px gray"
              color="gray.600"
              fontSize="3xl"
              fontWeight="bold"
              height={{ base: "3.8rem" }}
            >
              x
            </Button>
            <GridItem colSpan={2}>
              <Button
                backgroundColor="blue.700"
                boxShadow="1px 5px #0c4271"
                color="white"
                height={{ base: "3.8rem" }}
                size="sm"
                width="100%"
              >
                RESET
              </Button>
            </GridItem>
            <GridItem colSpan={2}>
              <Button
                backgroundColor="red.500"
                boxShadow="1px 5px #962d2d"
                color="white"
                fontSize="xs"
                height={{ base: "3.8rem" }}
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
  );
};

export default Calculator;
