import {
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common/exceptions';

export namespace ErrorUtil {
  export function handleError(error: any) {
    if (error.response?.data) {
      if (Buffer.isBuffer(error.response.data)) {
        var dataTemp = JSON.parse(error.response.data.toString());

        throw new HttpException(
          {
            status: error.response.status,
            message: dataTemp.message,
          },
          error.response.status,
        );
      }

      throw new HttpException(
        {
          status: error.response.status,
          message: error.response.data.message,
        },
        error.response.status,
      );
    }

    if (error instanceof HttpException) {
      throw error;
    } else {
      throw new InternalServerErrorException(error);
    }
  }
}
