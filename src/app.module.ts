import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatesService } from './services/candidates/candidates.service';
import { CandidatesController } from './controllers/candidates/candidates.controller';
import { CandidatesModule } from './modules/candidates.module';

@Module({
  imports: [CandidatesModule],
  controllers: [AppController, CandidatesController],
  providers: [AppService, CandidatesService],
})
export class AppModule {}
