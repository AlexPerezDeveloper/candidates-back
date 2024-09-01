import { Module } from '@nestjs/common';
import { CandidatesService } from '../services/candidates/candidates.service';
import { CandidatesController } from '../controllers/candidates/candidates.controller';

@Module({
  controllers: [CandidatesController],
  providers: [CandidatesService],
})
export class CandidatesModule {}
