import { Module } from '@nestjs/common';
import { QualificationService } from './qualification.service';
import { QualificationController } from './qualification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QualificationSchema } from 'src/models/qualification.model';
import { CourseSchema } from 'src/models/courses.model';
import { UsuarioSchema } from 'src/models/usuario.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Qualification', schema: QualificationSchema },
      { name: 'Course', schema: CourseSchema },
      { name: 'Usuario', schema: UsuarioSchema }
    ]),
  ],
  providers: [QualificationService],
  controllers: [QualificationController]
})
export class QualificationModule {}
