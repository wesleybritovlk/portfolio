import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, MinLength } from 'class-validator';

export class HomeImageRequest {
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({ required: true, name: 'url' })
  url: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @ApiProperty({ required: true, name: 'alt_en' })
  alt_en: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @ApiProperty({ required: true, name: 'alt_pt' })
  alt_pt: string;
}

export class HomeImageResponse {
  url: string;
  alt_en: string;
  alt_pt: string;

  constructor(url: string, alt_en: string, alt_pt: string) {
    this.url = url;
    this.alt_en = alt_en;
    this.alt_pt = alt_pt;
  }
}
