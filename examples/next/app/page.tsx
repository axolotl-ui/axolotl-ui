'use client'

import React, { useState } from 'react'

import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogContent,
  DialogTrigger,
  Heading,
  Input,
  Label,
  Link,
  Separator,
  Tag,
  Text,
  Textarea,
  Toggle
} from '@axolotl-ui/components'
import { HEX, useOptions } from '@axolotl-ui/core'
import { User } from 'lucide-react'
import NextLink from 'next/link'

const Page: React.FC = (): React.ReactNode => {
  const [color, setColor] = useState('#000000')
  const [accept, setAccept] = useState(false)

  const { options, setOptions } = useOptions()

  let _options = structuredClone(options)

  return (
    <div className="py-8">
      <Container className="grid gap-8">
        <div>
          <Heading>Change colors</Heading>

          <div className="grid gap-4">
            <Input value={color} onChange={(e) => setColor(e.target.value)} />

            <Button
              onClick={() => {
                _options.extend.colors.accent1 = color as HEX

                setOptions(_options)
              }}
            >
              Set colors
            </Button>
          </div>
        </div>

        <div>
          <Heading>Badges</Heading>

          <div className="grid gap-4">
            <Badge variant="solid" />
            <Badge variant="off" />
            <Badge variant="outline" />

            <Badge color="accent2" variant="solid" />
            <Badge color="accent2" variant="off" />
            <Badge color="accent2" variant="outline" />
          </div>
        </div>

        <div>
          <Heading>Boxes</Heading>

          <div className="grid gap-4">
            <Box color="info">Box solid</Box>

            <Box variant="outline">Box outline</Box>
            <Box variant="unstyled">Box unstyled</Box>
          </div>
        </div>

        <div>
          <Heading>Breadcrumbs</Heading>

          <div className="grid gap-4">
            <Breadcrumb>
              <BreadcrumbItem>Settings</BreadcrumbItem>
              <BreadcrumbItem>Security & Privacy</BreadcrumbItem>
              <BreadcrumbItem>Security</BreadcrumbItem>
              <BreadcrumbItem>2FA</BreadcrumbItem>
              <BreadcrumbItem>2FA</BreadcrumbItem>
              <BreadcrumbItem>2FA</BreadcrumbItem>
              <BreadcrumbItem>2FA</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>

        <div>
          <Heading>Buttons</Heading>

          <div className="flex flex-col gap-4">
            <Button asChild>
              <div>Button solid</div>
            </Button>

            <Button size="sm">Button solid sm</Button>
            <Button size="lg">Button solid lg</Button>
            <Button size="icon">Button solid icon</Button>

            <Button variant="off">Button off</Button>
            <Button variant="outline">Button outline</Button>
            <Button variant="ghost">Button ghost</Button>
            <Button variant="unstyled">Button unstyled</Button>
          </div>
        </div>

        <div>
          <Heading>Checkbox</Heading>

          <div className="grid gap-4">
            <Label className="flex w-fit items-center gap-2">
              <Checkbox checked={accept} onChange={() => setAccept(!accept)} />

              <span>Checkbox</span>
            </Label>

            <Label className="flex w-fit items-center gap-2">
              <Checkbox size="sm" checked={accept} onChange={() => setAccept(!accept)} />

              <span>Checkbox sm</span>
            </Label>

            <Label className="flex w-fit items-center gap-2">
              <Checkbox size="lg" checked={accept} onChange={() => setAccept(!accept)} />

              <span>Checkbox lg</span>
            </Label>
          </div>
        </div>

        <div>
          <Heading>Container</Heading>

          <div className="border-error grid gap-4 border">
            <Container className="border-warning border">
              <Text>Container</Text>
            </Container>
          </div>
        </div>

        <div>
          <Heading>Dialog</Heading>

          <Dialog>
            <DialogTrigger>open</DialogTrigger>
            31
            <DialogContent>hi slekeln</DialogContent>
          </Dialog>
        </div>

        <div>
          <Heading>Headings</Heading>

          <div className="grid gap-4">
            <Heading variant="h1">Heading h1</Heading>
            <Heading variant="h2">Heading h2</Heading>
            <Heading variant="h3">Heading h3</Heading>
            <Heading variant="h4">Heading h4</Heading>
            <Heading variant="h5">Heading h5</Heading>
            <Heading variant="h6">Heading h6</Heading>
          </div>
        </div>

        <div>
          <Heading>Inputs</Heading>

          <div className="grid gap-4">
            <Input placeholder="Input" />
            <Input label="Input:" placeholder="Input with label" />
            <Input leftAddon={<User />} placeholder="Input with icon" />
            <Input rightAddon={<User />} placeholder="Input with icon at right" />
            <Input
              leftAddon={<User />}
              rightAddon={<User />}
              placeholder="Input with icon at both sides"
            />

            <Input variant="solid" placeholder="Input solid" />
            <Input variant="underline" placeholder="Input underline" />
            <Input variant="unstyled" placeholder="Input unstyled" />
          </div>
        </div>

        <div>
          <Heading>Label</Heading>

          <div className="grid gap-4">
            <Label>Label</Label>
          </div>
        </div>

        <div>
          <Heading>Link</Heading>

          <div className="grid gap-4">
            <Link component={NextLink} href="link">
              Link
            </Link>
          </div>
        </div>

        <div>
          <Heading>Separator</Heading>

          <div className="grid gap-4">
            <Separator />
          </div>
        </div>

        <div>
          <Heading>Tags</Heading>

          <div className="flex flex-col gap-4">
            <Tag>Tag solid</Tag>

            <Tag size="sm">Tag solid sm</Tag>
            <Tag size="lg">Tag solid lg</Tag>

            <Tag variant="off">Tag off</Tag>
            <Tag variant="outline">Tag outline</Tag>
          </div>
        </div>

        <div>
          <Heading>Text</Heading>

          <div className="grid gap-4">
            <Text>Text accent1</Text>
            <Text color="accent2">Text accent2</Text>
            <Text color="neutral">Text neutral</Text>
            <Text color="error">Text error</Text>
          </div>
        </div>

        <div>
          <Heading>Textarea</Heading>

          <div className="grid gap-4">
            <Textarea placeholder="Textarea" />
            <Textarea variant="solid" placeholder="Textarea solid" />
            <Textarea variant="underline" placeholder="Textarea underline" />
            <Textarea variant="unstyled" placeholder="Textarea unstyled" />
          </div>
        </div>

        <div>
          <Heading>Toggle</Heading>

          <div className="grid gap-4">
            <Toggle checked={accept} onChange={() => setAccept(!accept)} label="Toggle" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Page
