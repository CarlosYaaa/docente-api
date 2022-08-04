import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { ActivitiesService } from './activities.service';
import { ActivitiesResponse, ActivityEditRequest, ActivityRequest } from './dto/activity.dto';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    createActivity(activityRequest: ActivityRequest): Promise<RespuestaServidor>;
    getAllActivities(idCurso: string): Promise<ActivitiesResponse[]>;
    editActivityById(idActividad: string, activityEditRequest: ActivityEditRequest): Promise<RespuestaServidor>;
    deleteActivityById(idActividad: string): Promise<RespuestaServidor>;
}
