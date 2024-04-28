'use client'
import { Input } from "~/components/ui/input";
import { Page } from "../_components/pagedefault";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";

export default function Home(){
    return (
      <Page childClassName="justify-center">
          <Label className="text-2xl">Log In</Label>
          <form>
            <Label>Username:</Label>
            <Input type="text" name="username" />
            <Label>Password:</Label>
            <Input type="password" name="password" />
            <Button type="submit">Log In</Button>
          </form>
      </Page>
    );
}