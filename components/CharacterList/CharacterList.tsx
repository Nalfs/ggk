import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

interface Fight {
  id: number;
}

interface Player {
  fights: Fight[];
  guid: number;
  icon: string;
  id: number;
  name: string;
  server: string;
  type: string;
}

interface CharacterListProps {
  characters: Player[];
}

export const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  //console.log(characters);
  return (
    <div>
      {characters.map(
        (character) =>
          character.type !== "Pet" && (
            <Card className="m-2 w-m py-1 px-1" key={character.id}>
              <CardContent>
                <div className="flex">
                  <div className="px-1">
                    <p>
                      Name: <strong>{character.name}</strong>
                    </p>
                    <p>
                      Class: <strong>{character.type}</strong>
                    </p>
                  </div>
                  <Image
                    src={`/images/class_64/${character.type.toLowerCase()}.png`}
                    alt={character.icon}
                    width={42}
                    height={32}
                    className="mr-2"
                  />
                </div>
              </CardContent>
            </Card>
          )
      )}
    </div>
  );
};
