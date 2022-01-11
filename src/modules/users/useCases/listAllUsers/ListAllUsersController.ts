import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {     
      return response.json(this.listAllUsersUseCase.execute({ user_id }));
    } catch (e) {
      return response.status(400).json({ error: e });
    }

    

  }
}

export { ListAllUsersController };
