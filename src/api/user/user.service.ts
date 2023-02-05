import { hash } from "bcryptjs";
import { BadRequestException } from "../../common/exceptions";
import { hashRounds } from "../../config";
import { SignUpDto } from "./dto/signup.dto";
import { UserRepository } from "./user.repository";
import { v4 as uuidv4 } from "uuid";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findById(id: string) {
    return this.userRepository.findById(id);
  }

  findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  countByEmail(email: string) {
    return this.userRepository.countByEmail(email);
  }

  async signUp(data: SignUpDto) {
    const count = await this.countByEmail(data.email);

    if (count) {
      throw new BadRequestException("중복된 이메일이 있습니다.");
    }

    const encryptedPassword = await hash(data.password, hashRounds);

    const id = uuidv4();

    await this.userRepository.create({
      id,
      email: data.email,
      name: data.name,
      password: encryptedPassword,
    });

    return id;
  }
}
