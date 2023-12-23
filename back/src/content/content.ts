import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

class HomeImage {
}

class Social {
}

class About {
}

class Project {
}

class Certificate {
}

class Github {
}

@Entity()
export class Content {
  @ObjectIdColumn() id: ObjectId;
  @ApiProperty()
  @Column() contact: string;
  @Column() homeImage: HomeImage;
  @Column() social: Social;
  @Column() about: About;
  @Column() projects: Project[];
  @Column() certificates: Certificate[];
  @Column() github: Github;
}