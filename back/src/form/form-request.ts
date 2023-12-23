import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class FormRequest {
  @ApiProperty({required: true, minimum: 3})
  @IsString()
  @MinLength(3)
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty({required: true, format: 'email'})
  @IsEmail()
  email: string;
  @ApiProperty()
  message: string;
}
