"use client";

import type React from "react";
import { useState } from "react";

import {
  Badge,
  Box,
  BoxContent,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Label,
  Link,
  Separator,
  Tag,
  Text,
} from "@axolotl-ui/components";
import { type HEX, useTheme, useThemeVariant } from "@axolotl-ui/core";
import { Menu, User } from "lucide-react";

const Page: React.FC = (): React.ReactNode => {
  const [baseColor, setBaseColor] = useState<HEX>("#1d4ed8");

  const { theme, setTheme } = useTheme();
  const { themeVariant, setThemeVariant } = useThemeVariant();

  return (
    <Container
      css={{
        display: "flex",

        flexDirection: "column",

        gap: "$16",

        paddingY: "$8",
      }}
    >
      <div>
        <Heading>Theme switcher</Heading>

        <div
          className={style({
            display: "flex",

            flexDirection: "column",

            gap: "$2",
          })}
        >
          <Button
            variant="solid"
            onClick={() => {
              setTheme("light");
            }}
          >
            Light theme
          </Button>

          <Button
            variant="off"
            onClick={() => {
              setTheme("dark");
            }}
          >
            Dark theme
          </Button>
        </div>
      </div>

      <div>
        <Heading>Color changer</Heading>

        <div
          className={style({
            display: "flex",

            flexDirection: "column",

            gap: "$2",
          })}
        >
          <input
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value as HEX)}
          />

          <Button
            variant="solid"
            onClick={() => {
              setOptions({
                ...options,
                baseColor,
              });
            }}
          >
            Change color
          </Button>
        </div>
      </div>

      <div>
        <Heading>Badge</Heading>

        <div
          className={style({
            display: "flex",

            flexDirection: "column",

            gap: "$2",
          })}
        >
          <Flex className={style({ gap: "$2" })}>
            Badge: solid <Badge variant="solid">1</Badge>
          </Flex>

          <Flex className={style({ gap: "$2" })}>
            Badge: off <Badge variant="off" />
          </Flex>

          <Flex className={style({ gap: "$2" })}>
            Badge: outlined <Badge variant="outlined" />
          </Flex>

          <Separator />

          <Flex className={style({ gap: "$2" })}>
            Badge: default <Badge variant="solid" size="default" />
          </Flex>

          <Flex className={style({ gap: "$2" })}>
            Badge: sm <Badge variant="solid" size="sm" />
          </Flex>

          <Flex className={style({ gap: "$2" })}>
            Badge: lg <Badge variant="solid" size="lg" />
          </Flex>
        </div>
      </div>

      <div>
        <Heading>Box</Heading>

        <div
          className={style({
            display: "flex",

            flexDirection: "column",

            gap: "$2",
          })}
        >
          <Box variant="solid">
            <BoxContent>Box: solid</BoxContent>
          </Box>

          <Box variant="outlined">
            <BoxContent>Box: outlined</BoxContent>
          </Box>
        </div>
      </div>

      <div>
        <Heading>Button</Heading>

        <div
          className={style({
            display: "flex",

            flexDirection: "column",

            gap: "$2",
          })}
        >
          <Button variant="solid">Button: solid</Button>
          <Button variant="off">Button: off</Button>
          <Button variant="outlined">Button: outlined</Button>
          <Button variant="ghost">Button: ghost</Button>
          <Button variant="text">Button: text</Button>

          <Separator />

          <Button variant="solid" size="default">
            Button: default
          </Button>
          <Button variant="solid" size="sm">
            Button: sm
          </Button>
          <Button variant="solid" size="lg">
            Button: lg
          </Button>
          <Button variant="solid" size="round">
            Button: round
          </Button>

          <Button variant="off" size="round">
            <Menu />
          </Button>
        </div>
      </div>

      <div>
        <Heading>Container</Heading>

        <div
          className={style({
            display: "flex",

            flexDirection: "column",

            gap: "$2",
          })}
        >
          <div
            className={style({
              borderWidth: "$default",
              borderColor: "red",
              borderStyle: "solid",
            })}
          >
            <Container>Container</Container>
          </div>
        </div>
      </div>

      <div>
        <Heading>Heading</Heading>

        <Box>
          <BoxContent>
            <div
              className={style({
                display: "flex",

                flexDirection: "column",

                gap: "$2",
              })}
            >
              <Heading variant="h1">Heading: h1</Heading>
              <Heading variant="h2">Heading: h2</Heading>
              <Heading variant="h3">Heading: h3</Heading>
              <Heading variant="h4">Heading: h4</Heading>
              <Heading variant="h5">Heading: h5</Heading>
              <Heading variant="h6">Heading: h6</Heading>
            </div>
          </BoxContent>
        </Box>
      </div>

      <div>
        <Heading>Input</Heading>

        <div
          className={style({
            display: "flex",

            flexDirection: "column",

            gap: "$2",
          })}
        >
          <Input variant="solid" placeholder="Input: solid" />
          <Input variant="outlined" placeholder="Input: outlined" />

          <Separator />

          <Input
            variant="solid"
            placeholder="Input: label"
            label="Input with label"
          />

          <Input
            variant="solid"
            leftAddon={<User />}
            placeholder="Input: left addon"
          />
          <Input
            variant="solid"
            rightAddon={<User />}
            placeholder="Input: right addon"
          />
          <Input
            variant="solid"
            leftAddon={<User />}
            rightAddon={<User />}
            placeholder="Input: left and right addon"
          />
        </div>
      </div>

      <div>
        <Heading>Label</Heading>

        <div
          className={style({
            display: "flex",

            flexDirection: "column",

            gap: "$2",
          })}
        >
          <Label>Label</Label>
        </div>
      </div>

      <div>
        <Heading>Link</Heading>

        <div
          className={style({
            display: "flex",

            flexDirection: "column",

            gap: "$2",
          })}
        >
          <Link>Link</Link>
        </div>
      </div>

      <div>
        <Heading>Separator</Heading>

        <div
          className={style({
            display: "flex",

            flexDirection: "column",

            gap: "$2",
          })}
        >
          <Separator />
        </div>
      </div>

      <div>
        <Heading>Tag</Heading>

        <div
          className={style({
            display: "flex",

            flexDirection: "column",

            gap: "$2",
          })}
        >
          <Tag variant="solid">Tag: solid</Tag>
          <Tag variant="off">Tag: off</Tag>
          <Tag variant="outlined">Tag: outlined</Tag>

          <Separator />

          <Tag variant="solid" size="default">
            Tag: default
          </Tag>
          <Tag variant="solid" size="sm">
            Tag: sm
          </Tag>
          <Tag variant="solid" size="lg">
            Tag: lg
          </Tag>
        </div>
      </div>

      <div>
        <Heading>Text</Heading>

        <div
          className={style({
            display: "flex",

            flexDirection: "column",

            gap: "$2",
          })}
        >
          <Text>Text</Text>
        </div>
      </div>
    </Container>
  );
};

export default Page;
