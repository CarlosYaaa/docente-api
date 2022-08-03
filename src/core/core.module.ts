import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { UserModule } from './user/user.module';
import { QualificationModule } from './qualification/qualification.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ActivitiesModule } from './activities/activities.module';

@Module({
    imports: [
        AuthModule,
        CoursesModule,
        UserModule,
        QualificationModule,
        AttendanceModule,
        ActivitiesModule,
    ],
})
export class CoreModule {}
