import { Router } from "express";
import { BadRequestException } from "../../common/exceptions";
import { Controller } from "../../common/interfaces/controller.interface";
import { Handler, wrap } from "../../lib/request-handler";
import { SignUpDto, SignUpResponse } from "./dto/signup.dto";

export default class UserController implements Controller {
  path = "/user";
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    const router = Router();
    router.post("/signup", wrap(this.signUp));
    this.router.use(this.path, router);
  }

  signUp: Handler = async (req): Promise<SignUpResponse> => {
    const { email, name, password } = req.body as SignUpDto;

    if (!email) {
      throw new BadRequestException("이메일은 필수입니다.");
    }

    if (!password) {
      throw new BadRequestException("비밀번호는 필수입니다.");
    } else if (password.length < 8) {
      throw new BadRequestException("비밀번호는 최소 8글자 이상입니다.");
    }

    if (!name) {
      throw new BadRequestException("이름은 필수입니다.");
    }

    return true;
  };
}
