'use client'

import {
  Button,
  Checkbox,
  Container,
  Heading,
  Input,
  Label,
  Link,
  Separator,
  Text
} from '@axolotl-ui/components'

const Page: React.FC = (): React.ReactNode => {
  return (
    <Container className="my-16">
      <Heading>Login</Heading>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Input placeholder="Username" label="Username:" />
          <Input placeholder="Password" label="Password:" />
        </div>

        <div className="flex w-full items-center justify-between">
          <Link>Forgot password</Link>

          <div className="flex items-center gap-2">
            <Button variant="off">Sign in</Button>
            <Button>Login</Button>
          </div>
        </div>

        <Separator>
          <Text>OR</Text>
        </Separator>

        <Button color="error" className="w-full">
          Continue with Google
        </Button>
        <Button color="info" className="w-full">
          Continue with Apple
        </Button>
      </div>
    </Container>
  )
}

export default Page
