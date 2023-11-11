import Heading from "@/components/Heading";
import Image from "next/image";
import { getMembers, getGuildLogs } from "@/lib/members";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export default async function GuildPage() {
  const data = await getMembers();

  // Check if members is available and an array
  if (data && Array.isArray(data.members)) {
    return (
      <>
        <div className="px-10">
          <Heading>Guild Page</Heading>
          <p>{data.name}</p>
          <p>{data.faction}</p>
          <p>
            {data.realm}, {data.region}{" "}
          </p>
          {/* <p>{data.profile_url}</p> */}
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href={data.profile_url}
          >
            Guild link
          </Link>

          {data.members.map((member: any, index: any) => (
            <Card key={index}>
              <p key={index}>
                <ul>
                  {/* {Object.entries(member.character).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))} */}
                  <CardHeader>
                    <CardTitle>{member.character.name}</CardTitle>
                    <CardDescription>
                      {" "}
                      Rank: {member.rank}, Class: {member.character.class}
                      <br />
                    </CardDescription>
                    <CardContent>
                      <p> {member.character.active_spec_name}</p>
                      <p> {member.character.active_spec_role}</p>
                      <p> {member.character.gender}</p>
                      <p> {member.character.faction}</p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        href={member.character.profile_url}
                      >
                        Character link
                      </Link>
                    </CardFooter>
                  </CardHeader>
                </ul>
              </p>
            </Card>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Heading>Guild Page</Heading>
        <p>Failed to fetch guild members</p>
      </>
    );
  }
}
