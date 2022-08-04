/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Activity } from 'src/interface/activity.interface';
import { ActivityEditRequest, ActivityRequest } from './dto/activity.dto';
export declare class ActivitiesService {
    private readonly activityModel;
    constructor(activityModel: Model<Activity>);
    createActivity(activity: ActivityRequest): Promise<{
        message: string;
    }>;
    getAllActivities(idCurso: string): Promise<(import("mongoose").Document<unknown, any, Activity> & Activity & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    editActivityById(idActivity: string, activity: ActivityEditRequest): Promise<{
        message: string;
    }>;
    deleteActivityById(idActividad: string): Promise<{
        message: string;
    }>;
}
