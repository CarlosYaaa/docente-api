import { Module } from '@nestjs/common';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from 'src/models/usuario.model';
import { CourseSchema } from 'src/models/courses.model';
import { AttedanceSchema } from 'src/models/attendance.model';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Course', schema: CourseSchema },
      { name: 'Usuario', schema: UsuarioSchema },
      { name: 'Attendance', schema: AttedanceSchema },
    ]),
  ],
  controllers: [AttendanceController],
  providers: [AttendanceService]
})
export class AttendanceModule {}
