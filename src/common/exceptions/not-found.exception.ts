import { HttpException } from "./http.exception";

export class NotFoundException extends HttpException {
  constructor(message = "찾을 수 없습니다.") {
    super(404, message);
  }
}
