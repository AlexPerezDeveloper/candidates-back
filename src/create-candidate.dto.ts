import { IsString } from 'class-validator';

export class CreateCandidateDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
