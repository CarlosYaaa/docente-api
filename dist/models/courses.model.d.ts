import mongoose from 'mongoose';
import { DayCourses } from 'src/enums/courses.enum';
export declare const CourseSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    descripcion: string;
    day: DayCourses;
    schedule: {
        startTime: {
            type: StringConstructor;
            required: true;
        };
        endTime: {
            type: StringConstructor;
            required: true;
        };
    }[];
    students: {
        type: typeof mongoose.Types.ObjectId;
        ref: "Usuario";
    }[];
    user?: typeof mongoose.Types.ObjectId;
}>;
