import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { AllQualificationForCourseResponse, EditQualificationRequest, QualificationByIdResponse, QualificationRequest } from './dto/qualification.dto';
import { QualificationService } from './qualification.service';
export declare class QualificationController {
    private readonly qualificationService;
    constructor(qualificationService: QualificationService);
    createQualification(qualification: QualificationRequest): Promise<RespuestaServidor>;
    getQualificationsOfCourse(idCurso: string): Promise<AllQualificationForCourseResponse[]>;
    getQualificationsById(idQualification: string): Promise<QualificationByIdResponse>;
    editQualificationById(idQualification: string, editQualificationRequest: EditQualificationRequest): Promise<RespuestaServidor>;
}
