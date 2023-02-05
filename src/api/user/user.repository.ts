import { Repository } from "../../common/interfaces/repository.interface";
import { User } from "../../db/models";
import { IUserInput } from "../../db/models/user";

export class UserRepository implements Repository {
  tableName: "Users";

  async findById(id: string) {
    const result = await User.findOne({
      where: {
        id,
      },
    });

    return result.toJSON();
  }

  async findByEmail(email: string) {
    const result = await User.findOne({
      where: {
        email,
      },
    });

    return result.toJSON();
  }

  async countByEmail(email: string) {
    const result = await User.count({
      where: { email },
    });

    return result;
  }

  async create(data: IUserInput) {
    const result = await User.create(data);

    return result.toJSON();
  }
}
