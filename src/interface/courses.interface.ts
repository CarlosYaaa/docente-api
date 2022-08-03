import { Document } from 'mongoose'

export interface Course extends Document{
  readonly _id: string;
  readonly descripcion: string;
  readonly day: string;
  readonly schedule: ScheduleCourse;
  readonly students?: string[];
  readonly user: string;
}

interface ScheduleCourse {
  readonly startTime: string;
  readonly endTime: string;
}
