import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { HomeImage } from './home-image/home-image';

@Entity()
export class Content {
  @ObjectIdColumn() id: ObjectId;
  @ApiProperty()
  @Column(type => HomeImage) homeImage: HomeImage;

  constructor() {
  }

  /*
  @Column() social: Social;
  @Column() about: About;
  @Column() projects: Project[];
  @Column() certificates: Certificate[];
  @Column() contact: string;
  @Column() github: Github;
  */
}
