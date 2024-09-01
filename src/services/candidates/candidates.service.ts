import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from '../../create-candidate.dto';
import * as XLSX from 'xlsx';
import { Express } from 'express';
import * as fs from 'fs';

@Injectable()
export class CandidatesService {
  private candidates = [];

  async create(candidateDto: CreateCandidateDto, file: Express.Multer.File) {
    const fileBuffer = fs.readFileSync(file.path);

    const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const seniority = worksheet['A1'].v;
    const years = worksheet['B1'].v;
    const availability = worksheet['C1'].v;

    //console.log('Seniority: ', seniority);
    //console.log('Years: ', years);
    //console.log('Availability: ', availability);

    this.candidates.push({
      ...candidateDto,
      seniority: seniority,
      years: years,
      availability: availability,
    });

    return {
      ...candidateDto,
      seniority: seniority,
      years: years,
      availability: availability,
    };
  }

  findAll() {
    return this.candidates;
  }
}
