import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      return response.status(400).json({
        error: "User already exists!",
      });
    }

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return response.status(201).json(user);
  }

  async findAll(request: Request, response: Response) {
    const { email, senha } = request.headers;

    const adminEmail: string = "admin@admin.com";
    const adminSenha: string = "98733";

    const usersRepository = getCustomRepository(UsersRepository);
    const allUsers = await usersRepository.find();

    email === adminEmail && senha === adminSenha
      ? response.status(200).json(allUsers)
      : response.status(400).json({
          message:
            "To access this request, please inform a valid admin account.",
        });
  }
}

export { UserController };
